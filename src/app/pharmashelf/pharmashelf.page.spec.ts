import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmashelfPage } from './pharmashelf.page';

describe('PharmashelfPage', () => {
  let component: PharmashelfPage;
  let fixture: ComponentFixture<PharmashelfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmashelfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmashelfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
