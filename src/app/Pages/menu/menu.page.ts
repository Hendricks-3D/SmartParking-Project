import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  activePath = '';
   theme='light'
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
    },

    {
      name: 'Login',
      path: '/menu/login'
    },

    {
      name: 'Create Account',
      path: '/menu/registration'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
  }

  ngOnInit() {


          // Use matchMedia to check the user preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

           // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
           this.toggleDarkTheme(prefersDark.matches);

          // Listen for changes to the prefers-color-scheme media query
          prefersDark.addListener((mediaQuery) => {

            console.log(mediaQuery)
            this.toggleDarkTheme(mediaQuery.matches);

          } );
       
      
  }

    // Add or remove the "dark" class based on if the media query matches
    private toggleDarkTheme(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
    }

    public changeTheme():void
    {
        if(this.theme='light'){
          document.body.classList.add('dark');
          this.theme='dark'

        }else
        {
          document.body.classList.remove('dark');
          this.theme='light'
        }
    }

}