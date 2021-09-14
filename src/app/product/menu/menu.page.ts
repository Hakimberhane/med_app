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
      name: 'profile',
      path: '/menu/profile'
    },
    {
      name: 'pharmacy',
      path: '/menu/pharmacy'
    },
    {
      name: 'mycart',
      path: '/menu/mycart'
    },
    {
      name: 'doctorslist',
      path: '/menu/doctorslist'
    },
    {
      name: 'contactuspage',
      path: '/menu/contactuspage'
    },
    {
      name: 'aboutpage',
      path: '/menu/aboutpage'
    },
    {
      name: 'faqspage',
      path: '/menu/faqspage'
    },
    {
      name: 'tab3',
      path: '/menu/tab3'
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
