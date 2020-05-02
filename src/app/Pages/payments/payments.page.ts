import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbUtilityService } from 'src/app/Services/db-utility.service';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { IDriver } from 'src/app/Interfaces/idriver';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  private driver = {} as IDriver;


  constructor(private route:Router, private dbUtil:DbUtilityService, private parkingData:ParkingDataService) {

    //GET THE DRIVER DETAILS FROM THE SERVICE SO IT CAN BE USED TO CONFIRM THE PARKING
    this.driver = this.parkingData.getDriverData();

   

   

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

    
  }


}
