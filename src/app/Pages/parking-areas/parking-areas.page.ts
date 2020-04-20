import { Component, OnInit } from '@angular/core';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';

@Component({
  selector: 'app-parking-areas',
  templateUrl: './parking-areas.page.html',
  styleUrls: ['./parking-areas.page.scss'],
})
export class ParkingAreasPage implements OnInit {

  public parkingArea:IParkSpaces;

  constructor(private parkingData:ParkingDataService) { 


    this.parkingArea = this.parkingData.getParkingData();
  
  }

  ngOnInit() {
  }

}
