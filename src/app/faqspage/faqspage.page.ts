import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerserviceService } from '../services/customerservice.service';



@Component({
  selector: 'app-faqspage',
  templateUrl: './faqspage.page.html',
  styleUrls: ['./faqspage.page.scss'],
})
export class FaqspagePage implements OnInit {

 information: any[];
 automaticClose = false;
 numberOfProducts:number;
 products:any[];
 total:number;

  constructor(private http: HttpClient,private customerservice: CustomerserviceService) {
    this.http.get('assets/information.json').subscribe(res => {

      this.information = res['items'];
      this.information[0].open = false;
    });
  }

  ionViewWillEnter(){
      this.products =  this.customerservice.getCarts();
      this.numberOfProducts = this.products.length;
      this.total = 0;
      for (let productTemp of this.products) {
        this.total = this.total + (productTemp.price * productTemp.quantity);
    }
  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open;

    if (this.automaticClose && this.information[index].open) {
      this.information
      .filter((item, itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex) {
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
  }

   ngOnInit() {
  }


}