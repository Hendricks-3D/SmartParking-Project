import { Component, OnInit } from '@angular/core';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';
import { DbUtilityService } from 'src/app/Services/db-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-areas',
  templateUrl: './parking-areas.page.html',
  styleUrls: ['./parking-areas.page.scss'],
})
export class ParkingAreasPage implements OnInit {

  public parkingArea:IParkSpaces;

  public parking_spaces_List:IParkSpaces[] =[];

  constructor(private parkingData:ParkingDataService,private DbUtil:DbUtilityService, public navCtrl:Router) { 

// Here I get the Object the user select so i can compare the location selected with whats in our database
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
  this.navCtrl.navigateByUrl('/menu/book-parking');
}

}
