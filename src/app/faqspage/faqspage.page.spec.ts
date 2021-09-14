import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FaqspagePage } from './faqspage.page';

describe('FaqspagePage', () => {
  let component: FaqspagePage;
  let fixture: ComponentFixture<FaqspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
