import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowItWorksPage } from './how-it-works.page';

describe('HowItWorksPage', () => {
  let component: HowItWorksPage;
  let fixture: ComponentFixture<HowItWorksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowItWorksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
