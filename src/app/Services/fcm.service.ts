import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
//import { Platform } from '@ionic/angular';
//import {AngularFirestore} from 'angularfire2/firestore'

//import * as firebase from '@ionic-native/firebase'
//import { FirebaseDBServiceService } from './firebase-dbservice.service';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
 // public afs: AngularFirestore,
  //private platform:Platform,
  //private fireDB: FirebaseDBServiceService
  ) { }


  /*
   //GET TH PERMISSION TO SEND NOTIFICATION
  async getToken()
  {

    let token;

    if(this.platform.is('android'))
    {
      token = await firebase.Firebase.getToken()
    }
    if(this.platform.is('ios'))
    {
      token = await firebase.Firebase.getToken();
      await firebase.Firebase.grantPermission();//trigger ios popup notification
    }


    if(this.platform.is('cordova'))
    {
     // token = await firebase.Firebase.getToken()
    }


    return this.saveTokenToFireStore(token)
  }


  private saveTokenToFireStore(token: any) 
  {
    if(!token) return;

   // const deviceRef = this.afs.collection('devices');

    const  data = {
      token,
      userId:this.fireDB.userData.uid
    }
 
   // return deviceRef.doc(token).set(data);
  }


  public listenToNotification(){
    return firebase.Firebase.onNotificationOpen()

  }


  */
}
