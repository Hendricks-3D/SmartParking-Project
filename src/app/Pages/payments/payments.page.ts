import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbUtilityService } from 'src/app/Services/db-utility.service';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { IDriver } from 'src/app/Interfaces/idriver';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';



@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  private driver = {} as IDriver;
  public paypal='../../../assets/Paypal.png';
  private spaces = {} as IParkSpaces;

  constructor(private route:Router, private dbUtil:DbUtilityService, private parkingData:ParkingDataService,
    private payPal: PayPal) {
    
  
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
    this.dbUtil.pushMessageIn(this.driver);
    this.spaces.status = "occupy"
    this.dbUtil.changeParkingStatus(this.spaces);

    
  }

  public payPalCheckout():void{
    this.payPal.init({
      PayPalEnvironmentProduction: 'Adh51Y8S9NydPa3uIsIgmBBXlepYs8OeedvOASfQ76s2lH8SwTolCqZHMJD5ezyuk4wyPLpvQrXrBdlO',
      PayPalEnvironmentSandbox: 'sb-ekmof1646216@business.example.com',

    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.parkingData.getParkingData().price.toString(), 'USD', 'Description', 'sale');
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
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }


}
