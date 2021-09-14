import { Component, OnInit } from '@angular/core';
import { DoctorserviceService } from '../services/doctorservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-doctorslist',
  templateUrl: './doctorslist.page.html',
  styleUrls: ['./doctorslist.page.scss'],
})
export class DoctorslistPage implements OnInit {

 doctors:any[];

 constructor(private route: Router,private doctorservice: DoctorserviceService) { }

  ngOnInit() {

   this.doctors = this.doctorservice.getDoctors();
  }

  goToDoctorProfile(doctor){

      let navigationExtras: NavigationExtras = {
            queryParams: {
            special: JSON.stringify(doctor)
         }
        };
     this.route.navigate(['/doctorprofile'], navigationExtras);
  }
}
