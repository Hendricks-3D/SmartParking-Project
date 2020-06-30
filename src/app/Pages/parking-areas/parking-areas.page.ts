import { Component, OnInit } from '@angular/core';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';
import { DbUtilityService } from 'src/app/Services/db-utility.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IWatch } from 'src/app/Interfaces/iwatch';
import { FirebaseDBServiceService } from 'src/app/Services/firebase-dbservice.service';

@Component({
  selector: 'app-parking-areas',
  templateUrl: './parking-areas.page.html',
  styleUrls: ['./parking-areas.page.scss'],
})
export class ParkingAreasPage implements OnInit {

  public parkingArea:IParkSpaces;
  public occupyUrl='../../../assets/occupy.png'
  public parking_spaces_List:IParkSpaces[] =[];
  public watch = {} as IWatch;

  constructor(private parkingData:ParkingDataService,private DbUtil:DbUtilityService, public navCtrl:Router
    ,public alertController: AlertController, private fireDB:FirebaseDBServiceService ) { 

// Here I get the Object the user select so i can compare the location selected  with whats in our database
//Then display it in the ngFor
    this.parkingArea = this.parkingData.getParkingData();
  
  }

  ngOnInit() {
  }


  ngAfterContentInit() 
  {
   
    this.getAllParkingSpaces();//Here i get All the data from the database

  }

    //GET ALL PARKING SPACE FROM THE FIREBASE API
  
public getAllParkingSpaces():void{
  this.DbUtil.getAllParkingSpaces().toPromise().then(data=>{

    this.parking_spaces_List=data as IParkSpaces[];
 
  
  })

}


    public park(data:IParkSpaces):void{
      
      this.parkingData.setParkingData(data);
      this.watch.id  = data.code;
      this.watch.uid = this.fireDB.userData.uid;
      this.parkWatchAlert();

    }



  async parkWatchAlert() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Would you like to watch this area or park here?',
      buttons: [
        {
          text: 'Park',
          
          cssClass: 'secondary',
          handler: (park) => {
         
          this.navCtrl.navigateByUrl('/menu/book-parking');
          }
        }, {
          text: 'watch',
          handler: () => {

              //send user ID to watch Database

              this.DbUtil.addToWatchlist(this.watch);

              this.confirmWatch();
          }
        }
      ]
    });

    await alert.present();
  }



  async confirmWatch() {
    const alert = await this.alertController.create({
      header: '',
      message: 'you will be updated on this parking area.',
      buttons: [
        {
          text: 'Ok',
          
        }
        
      ]
    });

    await alert.present();
  }



}
