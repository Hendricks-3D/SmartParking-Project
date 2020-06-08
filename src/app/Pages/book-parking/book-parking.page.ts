import { Component, OnInit } from '@angular/core';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';
import { Router } from '@angular/router';
import { IDriver } from 'src/app/Interfaces/idriver';
import { AlertController } from '@ionic/angular';
import { DbUtilityService } from 'src/app/Services/db-utility.service';
import { IPaymentCounter } from 'src/app/Interfaces/ipayment-counter';
import { IMessageInCounter } from 'src/app/Interfaces/imessage-in-counter';
import { IUser } from 'src/app/Interfaces/iuser';
import { FirebaseDBServiceService } from 'src/app/Services/firebase-dbservice.service';

@Component({
  selector: 'app-book-parking',
  templateUrl: './book-parking.page.html',
  styleUrls: ['./book-parking.page.scss'],
})

export class BookParkingPage implements OnInit {

  private parkingSpace:IParkSpaces;
  public driver = {} as IDriver;
  public date = new Date();
  public messageCounter = {} as IMessageInCounter;
  
  public user = {} as IUser;

  constructor(private parkingData:ParkingDataService,private router:Router, public alertController: AlertController,
    private dbUtil:DbUtilityService, private firebaseDB:FirebaseDBServiceService) { 

    this.parkingSpace = parkingData.getParkingData();
    this.driver.sentTime = this.date.toString().slice(0,24);

  
      this.user = this.firebaseDB.GetCurrentUserData();
      console.log(this.user);

    
    
  }

  ngOnInit() {
  }

  public goToPaymentMethod():void{


    if(this.driver.license===undefined|| this.driver.license === null)
    {


        this.presentAlertLicense();
    }
    else
    {
      
      
      this.dbUtil.readMessageInCounter().toPromise().then(counter=>{
        this.messageCounter  = counter as IMessageInCounter;
        console.log("Message counter: "+ this.messageCounter.messageInCounter);

        this.driver.id = this.messageCounter.messageInCounter+1;

        this.dbUtil.updateMessageInCounter(this.driver.id);
  
  
        this.driver.reciever='Ozeki';
        this.driver.sender='Smart Park Guest';
        this.driver.message = "@Park"+this.driver.license+this.parkingData.getParkingData().code;//concatenate message with parking code and license
        this.driver.status = "S";
        this.parkingData.setDriverData(this.driver);
        this.router.navigateByUrl('/menu/payments');
        
      }).catch(err=>{
        console.log("error reading message Counter");
      })



    }


  }




  async presentAlertLicense() 
  {
    const alert = await this.alertController.create({
      header: 'License',
      message: 'Please enter a valid license plate numnber.',
      buttons: [
        {
          text: 'OK',
        }
      
      ]
    });

    await alert.present();
  }


}
