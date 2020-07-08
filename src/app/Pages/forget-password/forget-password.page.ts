import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseDBServiceService } from 'src/app/Services/firebase-dbservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {


  public email: '';
  constructor(private router: Router, private fireDBService:FirebaseDBServiceService,
   private navCtrl:NavController) { }

  ngOnInit() {
  }


  private getNewpassword():void
  {
      

    //check if email is valid
        this.fireDBService.sendforgetPasswordEmail(this.email).then(()=>{

          this.fireDBService.presentToast('Please check your email for reset link.');
          this.goToLogin();
        }).catch((err)=>{
          //print toast message
            console.log(err);

        });
   
  }

  goToLogin():void{
    //this.router.navigateByUrl('home');

    this.navCtrl.navigateRoot('/menu/login');
  }
}
