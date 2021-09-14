import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherproductspagePage } from './otherproductspage.page';

describe('OtherproductspagePage', () => {
  let component: OtherproductspagePage;
  let fixture: ComponentFixture<OtherproductspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherproductspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherproductspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
