import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressmodalPage } from './addressmodal.page';

describe('AddressmodalPage', () => {
  let component: AddressmodalPage;
  let fixture: ComponentFixture<AddressmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
