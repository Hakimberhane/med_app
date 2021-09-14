import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadprescriptionPage } from './uploadprescription.page';

describe('UploadprescriptionPage', () => {
  let component: UploadprescriptionPage;
  let fixture: ComponentFixture<UploadprescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadprescriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadprescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
