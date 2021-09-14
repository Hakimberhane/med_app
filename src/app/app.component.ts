import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

     this.sideMenu();  
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {  

 this.navigate =
    [
      {
        title : "My Order",
        url   : "/profile",
        icon  : "home"
      },
      {
        title : "Pharmacy",
        url   : "/pharmacy",
        icon  : "chatboxes"
      },
      {
        title : "Other Products",
        url   : "/otherproductspage",
        icon  : "contacts"
      },
      {
         title : "See a Doctor",
        url   : "/doctorslist",
        icon  : "home"
      },
      {
        title : "My Account",
        url   : "/addresspage",
        icon  : "chatboxes"
      },
      {
        title : "Contact Us",
        url   : "/contactuspage",
        icon  : "contacts"
      },
      {
        title : "FAQs",
        url   : "/faqspage",
        icon  : "contacts"
      },




    ]
        
  }



}

