import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.page.html',
  styleUrls: ['./doctorprofile.page.scss'],
})
export class DoctorprofilePage implements OnInit {
  
  doctor:any;

 constructor(private route: ActivatedRoute,private router: Router) {
      this.route = route;
 }

 ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.doctor = JSON.parse(params.special);
        } 
      });
  }

}
