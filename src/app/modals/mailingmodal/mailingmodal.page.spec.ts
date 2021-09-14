import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MailingmodalPage } from './mailingmodal.page';

describe('MailingmodalPage', () => {
  let component: MailingmodalPage;
  let fixture: ComponentFixture<MailingmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MailingmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
