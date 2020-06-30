import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FirebaseDBServiceService } from 'src/app/Services/firebase-dbservice.service';

import { INotification } from 'src/app/Interfaces/Inotification';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  public postRef:AngularFireList<INotification[]> = null;

  public notification:INotification[]=[];

  public length=0;

  constructor(private afDatabase: AngularFireDatabase,private fireDb:FirebaseDBServiceService) { 
    this.getListOfNotifications();
    



    
  
   // console.log(this.postRef)
  }

  ngOnInit() {
        (async () => { 


      await this.delay(3000);
      console.log(this.notification.length)
this.length = this.notification.length;
     
  })();
  }


  public  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  public getListOfNotifications():void{
   this.afDatabase.list(`SmartParkingDB/userProfile/${this.fireDb.userData.uid}/Notifications`).snapshotChanges().subscribe(notifications=>{
         notifications.forEach(not=>{
          this.notification.push(not.payload.val() as INotification);
          console.log(not.payload.val())
        })

        
    })
  }
}
