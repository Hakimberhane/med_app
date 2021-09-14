import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';




const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
  children: [
    {
      path: 'pharmacy',
      loadChildren: '../pharmacy/pharmacy.module#PharmacyPageModule'
    },
    {
      path: 'profile',
      loadChildren: '../profile/profile.module#ProfilePageModule'
    },
    {
      path: 'tab3',
      loadChildren: '../tab3/tab3.module#Tab3PageModule'
    },
    {
      path: 'mycart',
      loadChildren: '../mycart/mycart.module#MycartPageModule'
    },
    {
      path: 'doctorslist',
      loadChildren: '../doctorslist/doctorslist.module#DoctorslistPageModule'
    },
    {
      path: 'aboutpage',
      loadChildren: '../aboutpage/aboutpage.module#AboutpagePageModule'
    },
    {
      path: 'faqspage',
      loadChildren: '../faqspage/faqspage.module#FaqspagePageModule'
    },
    {
      path: 'otherproductspage',
      loadChildren: '../otherproductspage/otherproductspage.module#OtherproductspagePageModule'
    },
    {
      path: 'contactuspage',
      loadChildren: '../contactuspage/contactuspage.module#ContactuspagePageModule'
    },

  ]
  },
  {
    path: '',
    redirectTo: '/menu/tab3'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    RouterModule.forChild(routes)

  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
