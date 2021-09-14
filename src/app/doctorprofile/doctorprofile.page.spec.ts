import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorprofilePage } from './doctorprofile.page';

describe('DoctorprofilePage', () => {
  let component: DoctorprofilePage;
  let fixture: ComponentFixture<DoctorprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
