import { Component, OnInit } from '@angular/core';
import { IPaymentInfo } from 'src/app/Interfaces/ipayment-info';

@Component({
  selector: 'app-add-visa-card',
  templateUrl: './add-visa-card.page.html',
  styleUrls: ['./add-visa-card.page.scss'],
})
export class AddVisaCardPage implements OnInit {

  public payment = {} as IPaymentInfo;

  constructor() { }

  ngOnInit() {
  }


  addVisa():void{
    console.log(this.payment);
  }

  
}
