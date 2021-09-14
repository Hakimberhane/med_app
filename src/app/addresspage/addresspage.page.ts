import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditprofilemodalPage } from '../modals/editprofilemodal/editprofilemodal.page';
import { MailingmodalPage } from '../modals/mailingmodal/mailingmodal.page';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-addresspage',
  templateUrl: './addresspage.page.html',
  styleUrls: ['./addresspage.page.scss'],
})
export class AddresspagePage implements OnInit {

  constructor(public modalController: ModalController, private route: Router,public alertCtrl:AlertController) { }

  ngOnInit() {
  }


 async  editprofilemodal(){ 
      const modal = await this.modalController.create({
      component: EditprofilemodalPage,

    });
    return await modal.present();
 }

  async  editMailingModal(){ 
      const modal = await this.modalController.create({
      component: MailingmodalPage,
    });
    return await modal.present();
 }

 goToShoppingHistory() {
    this.route.navigate(['/shoppinghistory']);
 }
 goToMedHistory() {
    this.route.navigate(['/medhistory']);
 }

 async showAlert() {
    
   const alert = await this.alertCtrl.create({
        cssClass: 'reset',
   message:'New Features Coming Soon!',
   buttons:['Ok']
   });
   await alert.present();
   const result = await alert.onDidDismiss();
  }
 
}
