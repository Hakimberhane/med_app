import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pharmacy',
        loadChildren: () => import('../pharmacy/pharmacy.module').then(m => m.PharmacyPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },

      {
        path: 'doctorslist',
        loadChildren: () => import('../doctorslist/doctorslist.module').then(m => m.DoctorslistPageModule)
      },
      {
        path: 'aboutpage',
        loadChildren: () => import('../aboutpage/aboutpage.module').then(m => m.AboutpagePageModule)
      },
      {
        path: 'faqspage',
        loadChildren: () => import('../faqspage/faqspage.module').then(m => m.FaqspagePageModule)
      },
      {
        path: 'otherproductspage',
        loadChildren: () => import('../otherproductspage/otherproductspage.module').then(m => m.OtherproductspagePageModule)
      },
      {
        path: 'contactuspage',
        loadChildren: () => import('../contactuspage/contactuspage.module').then(m => m.ContactuspagePageModule)
      },
      {
        path: 'addresspage',
        loadChildren: () => import('../addresspage/addresspage.module').then(m => m.AddresspagePageModule)
      },
      {
        path: 'doctorprofile',
        loadChildren: () => import('../doctorprofile/doctorprofile.module').then(m => m.DoctorprofilePageModule)
      },

      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'registerpage',
        loadChildren: () => import('../registerpage/registerpage.module').then(m => m.RegisterpagePageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
