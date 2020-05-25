import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.page.html',
  styleUrls: ['./add-payment-method.page.scss'],
})
export class AddPaymentMethodPage implements OnInit {

    public paypal='../../../assets/Paypal.png';
    public visa='../../../assets/Visa.png';
    public master='../../../assets/Mastercard.png'
  
    
  
  constructor(private router:Router) { }

  ngOnInit() {
  }


    
 /*   public addPaypal():void{
      this.router.navigateByUrl('/menu/add-paypal');
    }*/


    public addMasterCard():void{
      this.router.navigateByUrl('/menu/add-master');
    }


    public addUpay():void{
        this.router.navigateByUrl('/menu/add-upay')
    }

    public addVisaCard():void{
        this.router.navigateByUrl('/menu/add-visa');
    }



}
