
import { MapBoxService,Feature } from 'src/app/Services/map-box.service';
import {Component,OnInit, ViewChild} from '@angular/core';
import { DbUtilityService } from 'src/app/Services/db-utility.service';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';
//import { Geolocation } from '@ionic-native/geolocation';

import { NavController } from '@ionic/angular';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { Router } from '@angular/router';
import { ParkingAreasPage } from '../parking-areas/parking-areas.page';




declare var google;


@Component({
  selector: 'app-smart-parking-home',
  templateUrl: './smart-parking-home.page.html',
  styleUrls: ['./smart-parking-home.page.scss'],
})


export class SmartParkingHomePage implements OnInit {
  @ViewChild("map",{ static: true }) mapElement;
  //DECLARATIONS
 
  
   map: any;
   latitude:any;
   longitude:any;

   public parking_spaces_List:IParkSpaces[] =[];
    public searchInput:string='';//stores user input from the search bar

  addresses: string[] = [];
  selectedAddress = null;



  constructor(private mapboxService:MapBoxService,private DbUtil:DbUtilityService,
   public navCtrl:Router, private parkingData:ParkingDataService) { }

  ngOnInit():void {
    this.initMap();
    this.getCurrenposition();

  }


  /**
   * Method that initialize map and display it in the div tag by @ViewChild 
   */
  initMap() {

  let latlng = new google.maps.LatLng(18.1096,77.2975);
    //MAP OPTIONS
    let mapOptions={
      center:latlng,
      zoom:12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);//CREATE MAP WITH PRESET OPTIONS

      
  }


  /***
   * Method that gets user location
  */
private getCurrenposition():void{

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.longitude = position.coords.longitude;
      this.latitude= position.coords.latitude;
      
      console.log("latLng: "+this.latitude,this.longitude);
    });
} else {
   console.log("No support for geolocation")
}

  /*
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude=  resp.coords.latitude,
  this.longitude= resp.coords.longitude

  
   }).catch((error) => {
     console.log('Error getting location', error);
   });*/
}
 


 


  //GET ALL PARKING SPACE FROM THE FIREBASE API
  
private getAllParkingSpaces():void{
  this.DbUtil.getAllParkingSpaces().toPromise().then(data=>{

    this.parking_spaces_List=data as IParkSpaces[];
    
  })
}

/**
 * 
 * @param ev 
 * Allows user to search input field for parking area
 */
searchParking(ev: any) {
  // 
  this.getAllParkingSpaces()
  let location:string;
  
  // set val to the value of the searchbar
  this.searchInput = ev.target.value;

  // if the value is an empty string don't filter the Members
  if (this.searchInput && this.searchInput.trim() != '') {
    this.parking_spaces_List= this.parking_spaces_List.filter((space) => {
      location= space.location;
      return (location.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1);
    })
  }
}//END OF GET MEMBER


loadParkingAreas(parkingSpace={} as IParkSpaces): void{


 this.navCtrl.navigateByUrl('/menu/parking-areas');
 console.log("button works")
 this.parkingData.setParkingData(parkingSpace)

 


}


}
