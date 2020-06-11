import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FirebaseDBServiceService } from 'src/app/Services/firebase-dbservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private email:string;// Stores user email from login input field
  private password:string;//stores user's password from login screen
  public logoUrl='../../../assets/logo.png'




  constructor(private router: Router,private fireDBService:FirebaseDBServiceService ,
   private navCtrl:NavController) {}

  ngOnInit() {
  }


 /**
  * Method that send users to the the registration page.
  * Called in the home.html page
  */
 private goToSignUp():void {
  this.router.navigateByUrl('/menu/registration');
}


/**
* Call method from firebase DB service class to authenticate user credentials
*/
private loginUser():void{
  this.fireDBService.authenticateUser(this.email,this.password).then(()=>{
    //print successful toast message

   this.fireDBService.presentToast('Login was successful.');
   this.navCtrl.navigateRoot('/menu/main');
    
  }).catch((err)=>{

    this.fireDBService.presentToast('Please check your email and password.');
  })
}



private goToForgetPassword():void{

  console.log("clicked")
  this.router.navigateByUrl('/menu/forget-password');
}

}
