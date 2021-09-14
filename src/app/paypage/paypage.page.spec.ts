import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaypagePage } from './paypage.page';

describe('PaypagePage', () => {
  let component: PaypagePage;
  let fixture: ComponentFixture<PaypagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
