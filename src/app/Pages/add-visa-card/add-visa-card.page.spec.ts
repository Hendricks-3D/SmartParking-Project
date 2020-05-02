import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVisaCardPage } from './add-visa-card.page';

describe('AddVisaCardPage', () => {
  let component: AddVisaCardPage;
  let fixture: ComponentFixture<AddVisaCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVisaCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVisaCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
