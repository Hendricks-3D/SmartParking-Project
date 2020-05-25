
import { MapBoxService,Feature } from 'src/app/Services/map-box.service';
import {Component,OnInit, ViewChild} from '@angular/core';
import { DbUtilityService } from 'src/app/Services/db-utility.service';
import { IParkSpaces } from 'src/app/Interfaces/ipark-spaces';
import { ParkingDataService } from 'src/app/Services/Data/parking-data.service';
import { Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';




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

   //GOOGLE MAPS VARIABLES THAT ALLOWS DIRECTION BETWEEN TWO POINTS
   directionsService = new google.maps.DirectionsService();
   directionsRenderer = new google.maps.DirectionsRenderer();


   public geolocation = new Geolocation;
   public parking_spaces_List:IParkSpaces[] =[];
   public prev:IParkSpaces;
   public cur:IParkSpaces;
   public index = 0;
   public unique_parking_spaces_List:IParkSpaces[] =[];//This variable stores all parking spaces with unique location
   
   public date1= new Date('Fri May 01 2020 19:59:05');
   public date2 = new Date('Fri May 01 2020 13:59:05');
    public searchInput:string='';//stores user input from the search bar

  addresses: string[] = [];
  selectedAddress = null;



  constructor(private mapboxService:MapBoxService,private DbUtil:DbUtilityService,
   public navCtrl:Router, private parkingData:ParkingDataService,public alertController: AlertController) {


    console.log(this.diff_hours(this.date1,this.date2));

    
    }




//Method that calculate the difference between time in and time out
public diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }

  ngOnInit():void {

    //GET CURRENT LOCATION THEN LOAD MAP AFTERNDELAU
    this.getCurrenposition();



    (async () => { 


      await this.delay(3000);

      this.initMap();
      await this.delay(5000);
      this.calculateParkingLocationDistance();
  })();

  }



  ngAfterContentInit() 
  {
   //GET  ALL PARKING SPACE FROM API THEN FILTER IT TO REMOVE DUPLICATE LOCATIONS
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

  let latlng = new google.maps.LatLng(this.latitude,this.longitude);
    //MAP OPTIONS
    let mapOptions={
      center:latlng,
      zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

 
    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);//CREATE MAP WITH PRESET OPTIONS

      //CREATE MAP MARKER
      let marker = new google.maps.Marker({
        position: latlng,
        map: this.map,
        label:"me"
      }); 

      this.directionsRenderer.setMap(this.map);
  }//END OIF INTIALIZE MAP METHOD




  public calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
        {
          origin: new google.maps.LatLng(this.latitude,this.longitude),
          destination: new google.maps.LatLng(this.parkingData.getParkingData().latitude,this.parkingData.getParkingData().longitude),
          travelMode: 'DRIVING'
        },
        function(response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);

            console.log("Navigation started with ok Status")
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
  }


  /***
   * Method that gets user location
  */
private getCurrenposition():void{

  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.longitude = parseFloat(position.coords.longitude.toFixed(4));
          this.latitude= parseFloat(position.coords.latitude.toFixed(4));
          
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


    
    this.parkingData.setParkingData(parkingSpace)//Send the object clicked on so i can know which location the user wants to see.

 

      this.presentAlertConfirm()

      this.searchInput = '';


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




  /**
   * calculateParkingLocationDistance
   * Method that will loop through the filtered list 
   * and get the latitude and longitude values of all unique locations.
   * The distance from the current location to the oarking location will be calculated 
   * then display the closest ones.
   */

  

   public calculateParkingLocationDistance():void{


    let len=this.unique_parking_spaces_List.length; 
    console.log("length = "+len);

      for ( var i=0; i < len; i++ ){

  
          
        var R = 6378.137; // Radius of earth in KM
        var dLat = this.latitude* Math.PI / 180 - parseInt(this.unique_parking_spaces_List[i].latitude)* Math.PI / 180;
        var dLon =  this.longitude * Math.PI / 180 - parseInt(this.unique_parking_spaces_List[i].longitude) * Math.PI / 180;
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.latitude* Math.PI / 180) * Math.cos( parseInt(this.unique_parking_spaces_List[i].latitude)* Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var distance = R * c;

       
         
          if (distance <40)//the formula isnt accurate when compare to google maps but this 40 represents 700 meters
          {


            //create markers
              //CREATE MAP MARKER
              let marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.unique_parking_spaces_List[i].latitude,this.unique_parking_spaces_List[i].longitude),
                map: this.map,
                label:this.unique_parking_spaces_List[i].location
              }); 



              marker.addListener('click', function() {
                 this.parkingData.setParkingData(this.unique_parking_spaces_List[i]);
                this.navCtrl.navigateByUrl('/menu/book-parking');
              });
          }
      

        }//End for


   }

  public deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Would you like to navigate or park?',
      buttons: [
        {
          text: 'Park',
          
          cssClass: 'secondary',
          handler: (park) => {
            this.navCtrl.navigateByUrl('/menu/parking-areas');
          }
        }, {
          text: 'Navigate',
          handler: () => {


              //CREATE MAP MARKER
              let marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.parkingData.getParkingData().latitude,this.parkingData.getParkingData().longitude),
                map: this.map
              }); 
               //LOAD DIRECTION
              this.calculateAndDisplayRoute(this.directionsService,this.directionsRenderer);
          }
        }
      ]
    });

    await alert.present();
  }



}
