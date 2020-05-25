/**
 * 
 * This Service is use to pass the Driver and parking space data 
 * between components;
 */


import { Injectable } from '@angular/core';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';
import { IDriver } from 'src/app/Interfaces/idriver';

@Injectable({
  providedIn: 'root'
})
export class ParkingDataService {

  private parkingArea = {} as IParkSpaces;
  private driverDetail = {} as IDriver; 


  constructor() { }


  public setParkingData(newData:IParkSpaces):void{
    this.parkingArea = newData;

    return 
  }


  public getParkingData():IParkSpaces{

    return this.parkingArea;
  }



  public setDriverData(newData:IDriver):void{
    this.driverDetail = newData;

  }


  public getDriverData():IDriver{

    return this.driverDetail;
  }




}
