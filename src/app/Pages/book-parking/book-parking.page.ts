import { Component, OnInit } from '@angular/core';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';

@Component({
  selector: 'app-book-parking',
  templateUrl: './book-parking.page.html',
  styleUrls: ['./book-parking.page.scss'],
})
export class BookParkingPage implements OnInit {

  private parkingSpace:IParkSpaces;


  constructor(private parkingData:ParkingDataService) { 

    this.parkingSpace = parkingData.getParkingData();
  }

  ngOnInit() {
  }

}
