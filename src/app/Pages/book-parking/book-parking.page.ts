import { Component, OnInit } from '@angular/core';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';
import { Router } from '@angular/router';
import { IDriver } from 'src/app/Interfaces/idriver';

@Component({
  selector: 'app-book-parking',
  templateUrl: './book-parking.page.html',
  styleUrls: ['./book-parking.page.scss'],
})
export class BookParkingPage implements OnInit {

  private parkingSpace:IParkSpaces;
  public driver = {} as IDriver;
  public date = new Date();
  constructor(private parkingData:ParkingDataService,private router:Router) { 

    this.parkingSpace = parkingData.getParkingData();
    this.driver.sentTime = this.date.toString().slice(0,24);
  }

  ngOnInit() {
  }

  public goToPaymentMethod():void{

    this.driver.id=4;
    this.driver.reciever='Ozeki';
    this.driver.sender='Smart Park Guest';
    this.driver.message = "@Park"+this.driver.license+this.parkingData.getParkingData().code;//concatenate message with parking code and license
    this.driver.status = "S";
    this.parkingData.setDriverData(this.driver);
    this.router.navigateByUrl('/menu/payments');
    


  }

}
