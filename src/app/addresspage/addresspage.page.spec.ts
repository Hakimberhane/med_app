import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddresspagePage } from './addresspage.page';

describe('AddresspagePage', () => {
  let component: AddresspagePage;
  let fixture: ComponentFixture<AddresspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddresspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
