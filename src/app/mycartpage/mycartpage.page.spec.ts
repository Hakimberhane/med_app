import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycartpagePage } from './mycartpage.page';

describe('MycartpagePage', () => {
  let component: MycartpagePage;
  let fixture: ComponentFixture<MycartpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycartpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycartpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
