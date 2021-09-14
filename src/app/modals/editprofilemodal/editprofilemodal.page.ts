import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-editprofilemodal',
  templateUrl: './editprofilemodal.page.html',
  styleUrls: ['./editprofilemodal.page.scss'],
})
export class EditprofilemodalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  
  }

  dismissModal(){
  	this.modalController.dismiss();
  }

}
