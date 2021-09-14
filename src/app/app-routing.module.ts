import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  //{
    //path: 'menu',
    //loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
 // },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'pharmacy',
    loadChildren: () => import('./pharmacy/pharmacy.module').then( m => m.PharmacyPageModule)
  },
 {
    path: 'mycart',
    loadChildren: () => import('./mycart/mycart.module').then( m => m.MycartPageModule)
  },
   {
    path: 'addresspage',
    loadChildren: () => import('./addresspage/addresspage.module').then( m => m.AddresspagePageModule)
  },
  {
    path: 'paypage',
    loadChildren: () => import('./paypage/paypage.module').then( m => m.PaypagePageModule)
  },
  {
    path: 'aboutpage',
    loadChildren: () => import('./aboutpage/aboutpage.module').then( m => m.AboutpagePageModule)
  },
  {
    path: 'uploadprescription',
    loadChildren: () => import('./uploadprescription/uploadprescription.module').then( m => m.UploadprescriptionPageModule)
  },
  {
    path: 'pharmashelf',
    loadChildren: () => import('./pharmashelf/pharmashelf.module').then( m => m.PharmashelfPageModule)
  },
  {
    path: 'doctorslist',
    loadChildren: () => import('./doctorslist/doctorslist.module').then( m => m.DoctorslistPageModule)
  },
  {
    path: 'doctorprofile',
    loadChildren: () => import('./doctorprofile/doctorprofile.module').then( m => m.DoctorprofilePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'consultdoctor',
    loadChildren: () => import('./consultdoctor/consultdoctor.module').then( m => m.ConsultdoctorPageModule)
  },
  {
    path: 'registerpage',
    loadChildren: () => import('./registerpage/registerpage.module').then( m => m.RegisterpagePageModule)
  },
  {
    path: 'otherproductspage',
    loadChildren: () => import('./otherproductspage/otherproductspage.module').then( m => m.OtherproductspagePageModule)
  },
  {
    path: 'contactuspage',
    loadChildren: () => import('./contactuspage/contactuspage.module').then( m => m.ContactuspagePageModule)
  },
  {
    path: 'faqspage',
    loadChildren: () => import('./faqspage/faqspage.module').then( m => m.FaqspagePageModule)
  },
  {
    path: 'myorderspage',
    loadChildren: () => import('./myorderspage/myorderspage.module').then( m => m.MyorderspagePageModule)
  },
  {
    path: 'doctorprofile',
    loadChildren: () => import('./doctorprofile/doctorprofile.module').then( m => m.DoctorprofilePageModule)
  },
  {
    path: 'medhistory',
    loadChildren: () => import('./medhistory/medhistory.module').then( m => m.MedhistoryPageModule)
  },
  {
    path: 'medhistorydetail',
    loadChildren: () => import('./medhistorydetail/medhistorydetail.module').then( m => m.MedhistorydetailPageModule)
  },
  {
    path: 'shoppinghistorydetail',
    loadChildren: () => import('./shoppinghistorydetail/shoppinghistorydetail.module').then( m => m.ShoppinghistorydetailPageModule)
  },
  {
    path: 'shoppinghistory',
    loadChildren: () => import('./shoppinghistory/shoppinghistory.module').then( m => m.ShoppinghistoryPageModule)
  },
  {
    path: 'mailingmodal',
    loadChildren: () => import('./modals/mailingmodal/mailingmodal.module').then( m => m.MailingmodalPageModule)
  },
  {
    path: 'addressmodal',
    loadChildren: () => import('./modals/addressmodal/addressmodal.module').then( m => m.AddressmodalPageModule)
  },
  {
    path: 'editprofilemodal',
    loadChildren: () => import('./modals/editprofilemodal/editprofilemodal.module').then( m => m.EditprofilemodalPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
