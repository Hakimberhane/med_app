import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultdoctorPage } from './consultdoctor.page';

describe('ConsultdoctorPage', () => {
  let component: ConsultdoctorPage;
  let fixture: ComponentFixture<ConsultdoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultdoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultdoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
