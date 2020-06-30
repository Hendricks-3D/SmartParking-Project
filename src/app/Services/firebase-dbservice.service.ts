import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
import { ToastController } from '@ionic/angular';
import { IUser } from '../Interfaces/iuser';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDBServiceService {
  
  private mainDBNodeRef = "SmartParkingDB";
  private userNodeRef = "userProfile";
  private userId ='';
  public userData = {} as IUser;


  constructor(private afAuth:AngularFireAuth,private afDatabase: AngularFireDatabase,public toastController: ToastController) { 
      this.GetCurrentUserData();
  }



    /**
   * This method gets the current user data from firebase and return it as 
   * User type.
   */
  public GetCurrentUserData(): IUser {

    this.afAuth.authState.subscribe(auth=>{


      this.afDatabase.object(`${this.mainDBNodeRef}/${this.userNodeRef}/${auth.uid}`).snapshotChanges().subscribe(data=>{
        this.userData = data.payload.val() as IUser;

      localStorage.setItem('user',JSON.stringify(this.userData))
    })

    })
    
    
this.userData = JSON.parse(localStorage.getItem('user'));

    console.log(this.userData);
      return this.userData;
  }

   /**
   * Method that creates toast messages
   * @param message 
   */
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  /**
   * 
   * @param email 
   * @param password 
   * 
   * Method that creates new user and return promise of the user's credential,
   * so we can use the "Then" key later on.
   */
  public createNewUser(email:string,password:string):Promise<firebase.auth.UserCredential>{
      return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  /**
   * 
   * @param path 
   * @param object 
   */
  public addNewDataToDB(path:string,object:any):Promise<void>{
    return this.afDatabase.object(`${path}`).set(object);
  }



  /**
   * 
   * @param email 
   * @param password 
   * 
   * Method that accepts email and password to check if the user data is in the database 
   * if it is then this data will return to be used later on
   */
  public authenticateUser(email,password):Promise<firebase.auth.UserCredential>{
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }


  /**
   * 
   */
   public sendforgetPasswordEmail(email):Promise<void>{
     return this.afAuth.sendPasswordResetEmail(email);
   }

}
