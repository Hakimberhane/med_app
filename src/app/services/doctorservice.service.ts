import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  doctors:any[];

  constructor() { 

    this.doctors =  [

          {id:'d001', firstName: 'Anthony',lastName: 'Steven', speciality: "Family Physician",availablity: 'yes',address:'Bole road bld suite 205',isAvailable:false},
          {id:'d002', firstName:  'David',lastName: 'Andrew', speciality: "Family Physician",availablity: 'yes',address:'Addis ketema bld suite 205',isAvailable:true},
          {id:'d003', firstName:  'Lemma',lastName: 'Tafera', speciality: "Family Physician",availablity: 'yes',address:'Bole road bld suite 205',isAvailable:true},  
          {id:'d004', firstName:  'Abdela',lastName: 'Hussen', speciality: "Family Physician",availablity: 'yes',address:'Bole road bld suite 205',isAvailable:true},
      ];
  }

  public getDoctors(){
     return this.doctors;
  }
}