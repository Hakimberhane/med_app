import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';


@Component({
  selector: 'app-otherproductspage',
  templateUrl: './otherproductspage.page.html',
  styleUrls: ['./otherproductspage.page.scss'],
})
export class OtherproductspagePage implements OnInit {

  seasonalProducts;
  popularProducts;
  topProducts;
  otherProducts;

 constructor(private route: Router,private productservice: ProductserviceService) { }

  prData:any;
  ngOnInit() {

       this.popularProducts =  this.productservice.getPopularPrd();
       this.seasonalProducts =  this.productservice.getSeasonalPrd();
       this.topProducts =  this.productservice.getTopPrd();
       this.otherProducts =  this.productservice.getOtherPrd();
  }

 goToProductPage(product){

     let cusProduct = {
       id: product.id,
       name: product.name,
       description: product.description,
       price: product.price,
       company: product.company,
       url: product.url,
       quantity: 1,
     }

      let navigationExtras: NavigationExtras = {
            queryParams: {
            special: JSON.stringify(cusProduct)
         }
        };
     this.route.navigate(['/product'], navigationExtras);
  }
}
