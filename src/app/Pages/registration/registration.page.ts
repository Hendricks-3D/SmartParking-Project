import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/iuser';
import { Router } from '@angular/router';
import { FirebaseDBServiceService } from 'src/app/Services/firebase-dbservice.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  private mainDBNodeRef = "smartParking";
  private userNodeRef = "userProfile";

  public user = {} as IUser;
  public password:'';

  constructor(private router: Router, private fireDBService:FirebaseDBServiceService,
    private afAuth:AngularFireAuth) {}


  /**
   * Navigate user to the login page
   */
  private goToLogin():void {
    this.router.navigateByUrl('home');
  }

  ngOnInit() {
  }

  /**
   * calls the create user method from the firebaseDB service
   * 
   */
  private registerUser():void{


        this.fireDBService.createNewUser(this.user.email,this.password).then(()=>{
        this.afAuth.authState.subscribe((auth) =>{ 
          
          this.user.uid = auth.uid;//Get user ID from firebase
          console.log("uid saved ");
          //Store user information to the database after specifying the node references.
          this.fireDBService.addNewDataToDB(`${this.mainDBNodeRef}/${this.userNodeRef}/${this.user.uid}`,this.user)
          .then(()=>{
            console.log("user data stored");
            this.router.navigateByUrl('/main/login');

              this.fireDBService.presentToast('Registration as successful!');
          }).catch((err)=>{

            this.fireDBService.presentToast('Registration failed! please check ');
            console.log(err)
          })

        })

        })
      }

      

}
