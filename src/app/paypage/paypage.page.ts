import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-paypage',
  templateUrl: './paypage.page.html',
  styleUrls: ['./paypage.page.scss'],
})
export class PaypagePage implements OnInit {

  constructor(public alertCtrl:AlertController) { }

  async showAlert() {
  	
   const alert = await this.alertCtrl.create({
        cssClass: 'reset',
   message:'Your order has been sent',
   buttons:['Ok']
   });
   await alert.present();
   const result = await alert.onDidDismiss();
   console.log(result);
  }

  ngOnInit() {
  }

}
