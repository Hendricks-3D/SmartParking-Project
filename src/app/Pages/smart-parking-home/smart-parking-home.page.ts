
import { MapBoxService,Feature } from 'src/app/Services/map-box.service';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
//import { Geolocation } from '@ionic-enterprise/geolocation';

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
  

  addresses: string[] = [];
  selectedAddress = null;



  constructor(private mapboxService:MapBoxService) { }

  ngOnInit():void {}

  ngAfterContentInit():void {

/*
    Geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy:true
   }).then((resp)=>{
       this.lat =resp.coords.latitude;
       this.lng =resp.coords.longitude;

   

   */

  let latlng = new google.maps.LatLng(18.1096,77.2975);
    //MAP OPTIONS
    let mapOptions={
      center:latlng,
      zoom:12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);//CREATE MAP WITH PRESET OPTIONS
  }






  /*
  //ALLOWS USER TO SEARCH FOR ANYWHERE 
  public search(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm && searchTerm.length > 0) {
      this.mapboxService.search_word(searchTerm).subscribe((features: Feature[]) => {
          this.addresses = features.map(feat => feat.place_name);
        });
      } else {
        this.addresses = [];
      }
  }


  //HANDLE WHAT TO DO WHEN USER CLICK ON SEARCH RESULTS
  onSelect(address: string) {
    this.selectedAddress = address;
    this.addresses = [];
  }



*/

}
