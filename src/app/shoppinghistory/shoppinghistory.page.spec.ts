import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppinghistoryPage } from './shoppinghistory.page';

describe('ShoppinghistoryPage', () => {
  let component: ShoppinghistoryPage;
  let fixture: ComponentFixture<ShoppinghistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppinghistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppinghistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
