import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  activePath = '';

  pages = [


    {
      name: 'Home',
      path: '/menu/main'
    },

    {
      name: 'Parking Information',
      path: '/menu/parking'
    },
    {
      name: 'Payments',
      path: '/menu/payments'
    },

    {
      name: 'Core Team',
      path: '/menu/core-team'
    }
    ,

    {
      name: 'Contact Us',
      path: '/menu/contact-us'
    }
    ,

    {
      name: 'Privacy Policy',
      path: '/menu/privacy'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
  }

  ngOnInit() {
  }
}