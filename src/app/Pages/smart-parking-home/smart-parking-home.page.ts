
import { MapBoxService,Feature } from 'src/app/Services/map-box.service';
import {Component,OnInit, ViewChild} from '@angular/core';
import { DbUtilityService } from 'src/app/Services/db-utility.service';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';

import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { Router } from '@angular/router';





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
   public prev:IParkSpaces;
   public cur:IParkSpaces;
  public index = 0;
   public unique_parking_spaces_List:IParkSpaces[] =[];//This variable stores all parking spaces with unique location
   
    public searchInput:string='';//stores user input from the search bar

  addresses: string[] = [];
  selectedAddress = null;



  constructor(private mapboxService:MapBoxService,private DbUtil:DbUtilityService,
   public navCtrl:Router, private parkingData:ParkingDataService) {


    
    }

  ngOnInit():void {
    this.initMap();


    this.getCurrenposition();


  }
  ngAfterContentInit() 
  {
   
    this.getAllParkingSpaces();


    (async () => { 


      await this.delay(1000);

      this.filterParkingSpaces();
  })();



  }


public  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
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
}
 


 


  //GET ALL PARKING SPACE FROM THE FIREBASE API
  
public getAllParkingSpaces():void{
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
  this.getUniqueSpaces();

  let location:string;
  
  // set val to the value of the searchbar
  this.searchInput = ev.target.value;

  // if the value is an empty string don't filter the Members
  if (this.searchInput && this.searchInput.trim() != '') {
    this.unique_parking_spaces_List= this.unique_parking_spaces_List.filter((space) => {
      location= space.location;
      return (location.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1);
    })
  }
}//END OF GET MEMBER


   public loadParkingAreas(parkingSpace={} as IParkSpaces): void{


    this.navCtrl.navigateByUrl('/menu/parking-areas');
    this.parkingData.setParkingData(parkingSpace)//Send the object clicked on so i can know which location the user wants to see.



    }



    /**
     * This method remove the duplicated location in the parking spaces
     * So the ngFor don't repeat the duplicate location and just display one suggestion.
     */
    public filterParkingSpaces():void{
      var obj = {};
     let len=this.parking_spaces_List.length; 

      for ( var i=0; i < len; i++ )
         obj[this.parking_spaces_List[i]['location']] = this.parking_spaces_List[i];
      
       //  this.unique_parking_spaces_List= new Array();
      for ( var key in obj )
      this.unique_parking_spaces_List.push(obj[key]);


  }




  /**
   * In order for the filter to work properly, 
   * The object being filtered must be flushed and reupdated on every click.
   */
  public getUniqueSpaces():void{
    this.unique_parking_spaces_List = [];

    this.filterParkingSpaces();
  }




}
