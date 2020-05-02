/**
 * This service is used to read and write data to and from the API;
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse, } from '@angular/common/http'
import { IDriver } from '../Interfaces/idriver';

@Injectable({
  providedIn: 'root'
})
export class DbUtilityService {

  private getUrl:string = `http://localhost:5001/smartparkingproject-51b95/us-central1/app/api/readSpaces`;
  private pushmessageIn = `http://localhost:5001/smartparkingproject-51b95/us-central1/app/api/createMessageIn`;

  constructor(private http: HttpClient) { }



  public getAllParkingSpaces(){
    return this.http.get(this.getUrl);
    
    /*.toPromise().then(data=>{
      console.log(data);
    },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
        }
    
    )*/
  }

//This method will push the driver details to the API
  public pushMessageIn(driverDetails:IDriver){
     return this.http.post(this.pushmessageIn,driverDetails).toPromise().then(message=>{
       console.log(message)
     }).catch(err=>{
       console.log(err);
     })
  }


}
