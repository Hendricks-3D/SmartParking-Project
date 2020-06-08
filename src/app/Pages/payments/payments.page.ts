import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbUtilityService } from 'src/app/Services/db-utility.service';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { IDriver } from 'src/app/Interfaces/idriver';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';
import { AlertController } from '@ionic/angular';
import { IDriverPaymentData } from 'src/app/Interfaces/idriver-payment-data';
import { IPaymentCounter } from 'src/app/Interfaces/ipayment-counter';



@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  private driver = {} as IDriver;
  private driverPaymentDetails = {} as IDriverPaymentData;//Stores payment FData that will  be stored in the database.

  public paypal='../../../assets/Paypal.png';
  private spaces = {} as IParkSpaces;
  paymentCounter = {} as IPaymentCounter;

  constructor(private route:Router, private dbUtil:DbUtilityService, private parkingData:ParkingDataService,
    private payPal: PayPal,  public alertController: AlertController) {
    
  
    //GET THE DRIVER DETAILS FROM THE SERVICE SO IT CAN BE USED TO CONFIRM THE PARKING
    this.driver = this.parkingData.getDriverData();

     this.spaces = this.parkingData.getParkingData();
     console.log(this.spaces.region)
   }

  ngOnInit() {
  }


  public goToAddPayment():void{
      this.route.navigateByUrl('/menu/add-payment-method');
  }


/**
 * 
 * This method will send the parking data to messageIn table using the API url
 */
  public confirmPark():void{

    console.log(this.driver)

    console.log(this.driver.id);
    this.dbUtil.pushMessageIn(this.driver);
    this.spaces.status = "occupy"
    this.dbUtil.changeParkingStatus(this.spaces);
    this.intializePaymentData();
    this.presentAlert();

    this.route.navigateByUrl('/menu/main');
    
  }

  public payPalCheckout():void{
    this.payPal.init({
      PayPalEnvironmentProduction: 'Adh51Y8S9NydPa3uIsIgmBBXlepYs8OeedvOASfQ76s2lH8SwTolCqZHMJD5ezyuk4wyPLpvQrXrBdlO',
      PayPalEnvironmentSandbox: 'Adh51Y8S9NydPa3uIsIgmBBXlepYs8OeedvOASfQ76s2lH8SwTolCqZHMJD5ezyuk4wyPLpvQrXrBdlO',

    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.parkingData.getParkingData().price.toString(), 'JMD', 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(() => {
         console.log('Payment successsful');
    
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, (err) => {
          // Error or render dialog closed without being successful
        });
      }, (err) => {
        // Error in configuration
      });
    }, (err) => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }




  async presentAlert() 
  {
    const alert = await this.alertController.create({
      header: 'Complete',
      message: 'You have parked successfully. You will be charge $'+ this.spaces.price + '.00JMD for the first hour.' ,
      buttons: [
        {
          text: 'Ok',
        }
      
      ]
    });

    await alert.present();
  }



  private intializePaymentData():void{
   
    
    this.dbUtil.readPaymentInCounter().toPromise().then(counter=>{
      this.paymentCounter = counter as IPaymentCounter;

      
      console.log("Payment counter "+ this.paymentCounter.paymentCounter)


      this.driverPaymentDetails.id  = this.paymentCounter.paymentCounter+1;

      this.dbUtil.updatePaymentInCounter(this.driverPaymentDetails.id);
  
      this.driverPaymentDetails.license = this.driver.license;
      this.driverPaymentDetails.reciever = "Smart Parking";
      this.driverPaymentDetails.sender = this.driver.license;
      this.driverPaymentDetails.totalHours = 1;
      this.driverPaymentDetails.amount =  this.spaces.price;
      this.driverPaymentDetails.date = new Date().toLocaleString();
  
  
      
  
      this.dbUtil.pushDriverPayment(this.driverPaymentDetails);//sendn payment details to the api
    });


  }

}
