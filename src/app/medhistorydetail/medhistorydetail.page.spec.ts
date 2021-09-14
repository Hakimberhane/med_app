import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedhistorydetailPage } from './medhistorydetail.page';

describe('MedhistorydetailPage', () => {
  let component: MedhistorydetailPage;
  let fixture: ComponentFixture<MedhistorydetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedhistorydetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedhistorydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
