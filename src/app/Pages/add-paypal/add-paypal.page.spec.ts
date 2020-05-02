import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPaypalPage } from './add-paypal.page';

describe('AddPaypalPage', () => {
  let component: AddPaypalPage;
  let fixture: ComponentFixture<AddPaypalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaypalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPaypalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
