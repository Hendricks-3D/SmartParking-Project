import { Injectable } from '@angular/core';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';

@Injectable({
  providedIn: 'root'
})
export class ParkingDataService {

  private parkingArea = {} as IParkSpaces;



  constructor() { }


  public setParkingData(newData:IParkSpaces):void{
    this.parkingArea = newData;

  }


  public getParkingData():IParkSpaces{

    return this.parkingArea;
  }




}
