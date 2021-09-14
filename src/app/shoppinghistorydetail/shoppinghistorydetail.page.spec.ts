import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppinghistorydetailPage } from './shoppinghistorydetail.page';

describe('ShoppinghistorydetailPage', () => {
  let component: ShoppinghistorydetailPage;
  let fixture: ComponentFixture<ShoppinghistorydetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppinghistorydetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppinghistorydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
