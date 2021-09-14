import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedhistoryPage } from './medhistory.page';

describe('MedhistoryPage', () => {
  let component: MedhistoryPage;
  let fixture: ComponentFixture<MedhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
