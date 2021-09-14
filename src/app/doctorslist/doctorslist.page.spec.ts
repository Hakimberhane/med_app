import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorslistPage } from './doctorslist.page';

describe('DoctorslistPage', () => {
  let component: DoctorslistPage;
  let fixture: ComponentFixture<DoctorslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
