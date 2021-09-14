import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';
import { CustomerserviceService } from '../services/customerservice.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  product:any;
  update:any;
  quantity:number =1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,private productservice: ProductserviceService,private customerservice: CustomerserviceService) {
      
      this.route = route;
    }

  ngOnInit() {

      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.product = JSON.parse(params.special);
        }
      });
      this.quantity = this.product.quantity
  }

  ionViewWillEnter(){
      this.quantity = this.product.quantity
  }

  ngIncrease(){
    this.quantity = this.quantity + 1;
    this.product.quantity = this.quantity;

  }

  ngDecrease(){
    this.quantity = this.quantity - 1;
    this.product.quantity = this.quantity;

  }

  goToCartPage(product){
        let navigationExtras: NavigationExtras = {
            queryParams: {
            special: JSON.stringify(product)
         }
        };
        if(this.customerservice.updateQuantity(product.id,this.quantity)=="Yes") {
             this.router.navigate(['/profile'], navigationExtras);

        }else {

              console.log(this.customerservice.getCarts());
              this.customerservice.getCarts().push(product);
              console.log(this.customerservice.getCarts());
              this.router.navigate(['/profile'], navigationExtras);
       }

    }
}
