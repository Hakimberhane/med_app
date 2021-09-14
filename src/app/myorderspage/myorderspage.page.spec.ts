import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyorderspagePage } from './myorderspage.page';

describe('MyorderspagePage', () => {
  let component: MyorderspagePage;
  let fixture: ComponentFixture<MyorderspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyorderspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyorderspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
