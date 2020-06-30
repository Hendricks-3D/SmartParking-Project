import { Component, OnInit } from '@angular/core';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { IDriver } from 'src/app/Interfaces/idriver';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';
import { IDriverPaymentData } from 'src/app/Interfaces/idriver-payment-data';

@Component({
  selector: 'app-parking-information',
  templateUrl: './parking-information.page.html',
  styleUrls: ['./parking-information.page.scss'],
})
export class ParkingInformationPage implements OnInit {


  public driver = {} as IDriver;
  public spaces = {} as IParkSpaces;

  constructor( private parkingData:ParkingDataService) {

    //GET THE DRIVER DETAILS FROM THE SERVICE SO IT CAN BE USED TO CONFIRM THE PARKING
 //this.driver = this.parkingData.getDriverData();
 //this.spaces = this.parkingData.getParkingData();

if(JSON.parse(localStorage.getItem('driver')) !== null){
    this.driver = JSON.parse(localStorage.getItem('driver')) as IDriver;
   
    this.spaces = JSON.parse(localStorage.getItem("area")) as IParkSpaces;
   

}else
{
  return;
}


     console.log(this.spaces.status);

   }

  ngOnInit() {
  }

}
