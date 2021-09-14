import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mailingmodal',
  templateUrl: './mailingmodal.page.html',
  styleUrls: ['./mailingmodal.page.scss'],
})
export class MailingmodalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismissModal(){
  	this.modalController.dismiss();
  }

}

