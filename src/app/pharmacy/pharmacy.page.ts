import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.page.html',
  styleUrls: ['./pharmacy.page.scss'],
})
export class PharmacyPage implements OnInit {

 constructor(private route: Router) { }

  ngOnInit() {
  }

  goToPrescriptionPage() {
  	
    this.route.navigate(['/uploadprescription']);
  }

   goToShelfPage() {
  	
    this.route.navigate(['/pharmashelf']);
  }


}
