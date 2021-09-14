import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  
  products:any;
  updated:any;

  constructor() { 

    this.updated = "No";
    this.products =  [

          {id:'s001', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 19.00,
           company: 'Phara ltd',url:'assets/icon/pill5.jpg', quantity:1},
          {id:'s002',name:  'Antimatalion 2',description: 'll 5mg for liver pat', price: 33.90,
           company: 'Phara ltd',url:'assets/icon/pill6.jpg', quantity:1},
          {id:'s003', name:  'Antimatalion 3',description: 'll 5mg for liver pat', price: 33.90,
           company: 'Phara ltd',url:'assets/icon/pill7.jpg', quantity:1},       
          {id:'s004', name:  'Antimatalion 4',description: 'll 5mg for liver pat', price: 33.90,
           company: 'Phara ltd',url:'assets/icon/pill8.jpg', quantity:1},
      ];
  }

    public getCarts(){
      return this.products;
    }

    public deleteItem(id) {
     
      for(var i = 0; i < this.products.length; i++) {
        if(this.products[i].id == id) {
            this.products.splice(i, 1);
            break;
        }
      }
      
    }

   public updateQuantity(id,quantity) {
     
      for(var i = 0; i < this.products.length; i++) {
        if(this.products[i].id == id) {
            this.products[i].quantity = quantity;
            this.updated = "Yes";
            return this.updated
        }
      }
      
    }

}

