import { Component, OnInit } from '@angular/core';
import { IPaymentInfo } from 'src/app/Interfaces/ipayment-info';

@Component({
  selector: 'app-add-master-card',
  templateUrl: './add-master-card.page.html',
  styleUrls: ['./add-master-card.page.scss'],
})
export class AddMasterCardPage implements OnInit {

  public payment = {} as IPaymentInfo;
  constructor() { }

  ngOnInit() {
  }

}
