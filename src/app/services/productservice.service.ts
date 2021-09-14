import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

   constructor() {}


   public getPopularPrd(){
   
    let  popularProducts =  [
          {id:'p001', name:  'Citalift Oral',description: 'll 5mg for liver pat', price: 26.00,
           company: 'Phara ltd',url:'assets/icon/pill6.jpg'},
          {id:'p002', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 29.00,
           company: 'FDC ltd',url:'assets/icon/pill2.jpg'},
          {id:'p003', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 100.00,
           company: 'Phara Limited',url:'assets/icon/pill3.jpg'},        
          {id:'p004', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 213.78,
           company: 'Phara ltd',url:'assets/icon/pill4.jpg'},      
     
                   ];
     return popularProducts;
   }

  public getSeasonalPrd(){
   
    let  seasonalProducts =  [
          {id:'s001', name:  'Citalift Oral',description: 'll 5mg for liver pat', price: 26.00,
           company: 'Phara ltd',url:'assets/icon/pill4.jpg'},
          {id:'s002', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 29.00,
           company: 'FDC ltd',url:'assets/icon/pill6.jpg'},
          {id:'s003', name:  'Antimatalion 6',description: 'll 5mg for liver pat', price: 100.00,
           company: 'Phara Limited',url:'assets/icon/pill7.jpg'},        
          {id:'s004', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 213.78,
           company: 'Phara ltd',url:'assets/icon/pill8.jpg'},      
     
                   ];
     return seasonalProducts;
   }

   public getTopPrd(){
   
    let  topProducts =  [
          {id:'t001', name:  'Citalift Oral',description: 'll 5mg for liver pat', price: 26.00,
           company: 'Phara ltd',url:'assets/icon/pill6.jpg'},
          {id:'t002', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 29.00,
           company: 'FDC ltd',url:'assets/icon/pill1.jpg'},
          {id:'t003', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 100.00,
           company: 'Phara Limited',url:'assets/icon/pill7.jpg'},        
          {id:'t004', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 213.78,
           company: 'Phara ltd',url:'assets/icon/pill2.jpg'},  
    
                   ];
     return topProducts;
   }

   public getOtherPrd(){
   
     let  otherProducts =  [
           {id:'ot001', name:  'Citalift Oral',description: 'll 5mg for liver pat', price: 26.00,
           company: 'Phara ltd',url:'assets/icon/pill1.jpg'},
          {id:'ot002', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 29.00,
           company: 'FDC ltd',url:'assets/icon/pill8.jpg'},
          {id:'ot003', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 100.00,
           company: 'Phara Limited',url:'assets/icon/pill4.jpg'},        
          {id:'ot004', name:  'Antimatalion 1',description: 'll 5mg for liver pat', price: 213.78,
           company: 'Phara ltd',url:'assets/icon/pill6.jpg'},   
    
                   ];
     return otherProducts;
   }

}

