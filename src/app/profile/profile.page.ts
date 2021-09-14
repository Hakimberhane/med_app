import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';
import { CustomerserviceService } from '../services/customerservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],

})
export class ProfilePage implements OnInit {

 products:any[];
 total;
 numberOfProducts:number;
 constructor(private route: Router,private customerservice: CustomerserviceService) { }
 
  ngOnInit() {
     this.products =  this.customerservice.getCarts();
     this.numberOfProducts = this.products.length;
     this.total =0;
	   for (let productTemp of this.products) {
		    this.total = this.total + (productTemp.price * productTemp.quantity);
		 }
  }
   ionViewWillEnter(){
        this.products =  this.customerservice.getCarts();
        this.numberOfProducts = this.products.length;

        this.total = 0;

	    for (let productTemp of this.products) {
		    this.total = this.total + (productTemp.price * productTemp.quantity);
		}
  }

  goToProductPage(product){

      let navigationExtras: NavigationExtras = {
            queryParams: {
            special: JSON.stringify(product)
         }
        };
     this.route.navigate(['/product'], navigationExtras);
  }

  remove(product){
       this.products = this.products.filter(item => item.id !== product.id);
       this.customerservice.deleteItem(product.id);
       this.total = this.total - (product.quantity * product.price);
       this.numberOfProducts = this.numberOfProducts -1;

  }
}
