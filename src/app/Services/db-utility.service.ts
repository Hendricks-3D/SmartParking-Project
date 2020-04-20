import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse, } from '@angular/common/http'
import { IParkSpaces } from '../Interfaces/ipark-spaces';
@Injectable({
  providedIn: 'root'
})
export class DbUtilityService {

  private getAllSpaces:string = `http://localhost:5001/smartparkingproject-51b95/us-central1/app/api/readSpaces`;


  constructor(private http: HttpClient) { }



  public getAllParkingSpaces(){
    return this.http.get(this.getAllSpaces);
    
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


}
