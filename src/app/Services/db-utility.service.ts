/**
 * This service is used to read and write data to and from the API;
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse, } from '@angular/common/http'
import { IDriver } from '../Interfaces/idriver';
import { IParkSpaces } from '../Interfaces/ipark-spaces';
import { IDriverPaymentData } from '../Interfaces/idriver-payment-data';
import { IMessageInCounter } from '../Interfaces/imessage-in-counter';
import { IPaymentCounter } from '../Interfaces/ipayment-counter';
import { IWatch } from '../Interfaces/iwatch';

@Injectable({
  providedIn: 'root'
})
export class DbUtilityService {

  private getUrl:string = `https://us-central1-smartparkingproject-51b95.cloudfunctions.net/app/api/readSpaces`;
  private pushmessageIn = `https://us-central1-smartparkingproject-51b95.cloudfunctions.net/app/api/createMessageIn`;
  private updateParkingSpaceUrl = `https://us-central1-smartparkingproject-51b95.cloudfunctions.net/app/api/updateSpace`
  private pushPaymentDetails = `https://us-central1-smartparkingproject-51b95.cloudfunctions.net/app/api/createPayment`;
  private watchListUrl = `https://us-central1-smartparkingproject-51b95.cloudfunctions.net/app/api/addToWatchList`;

  //message in counterlinks
  private messageInCounterUrl = `https://us-central1-smartparkingproject-51b95.cloudfunctions.net/app/api/messageInCounter/1`;

  private paymentCounterUrl = `https://us-central1-smartparkingproject-51b95.cloudfunctions.net/app/api/paymentCounter/1`;


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
       console.log("driver request was sent")
     }).catch(err=>{
       console.log(err);
     })
  }


  //Update parking space status from available to occupy
  public changeParkingStatus(space:IParkSpaces){
        return this.http.put(`${this.updateParkingSpaceUrl}/${space.code}` ,space).toPromise().then(res=>{
          console.log("Parking space status was updated");
        }).catch(err=>{
          console.log(err);
        })
  }


  //This method will push the driver details to the API
  public pushDriverPayment(driverDetails:IDriverPaymentData){
    return this.http.post(this.pushPaymentDetails,driverDetails).toPromise().then(message=>{
      console.log("payment request was sent")
    }).catch(err=>{
      console.log(err);
    })
 }



 //Get the number of messages in message In Table
    public readMessageInCounter(){

        return this.http.get(this.messageInCounterUrl);
    }

      //Update the number of records in the message in table
    public updateMessageInCounter(amt:number):void{
      let counter = {} as IMessageInCounter;
        counter.id =1;
        counter.messageInCounter = amt;

        this.http.put(this.messageInCounterUrl,counter).toPromise().then(promise=>{
          console.log("message In counter was updated")
        });4

    }


     //Get the number of payment message In Table
     public readPaymentInCounter(){
     

      return this.http.get(this.paymentCounterUrl);
  }

      //Update the number of records in the payments table
    public updatePaymentInCounter(amt:number):void{
          let counter = {} as IPaymentCounter;
          counter.id =1;
          counter.paymentCounter = amt;

          this.http.put(this.paymentCounterUrl,counter).toPromise().then(promise=>{
            console.log("message In counter was updated")

        })

    }


    //ADD DATA TO WATCH LIST
      //Update parking space status from available to occupy
  public addToWatchlist(watch:IWatch)
  {
    return this.http.post(this.watchListUrl,watch).toPromise().then(message=>{
      console.log("payment request was sent")
    }).catch(err=>{
      console.log(err);
    })
}


}
