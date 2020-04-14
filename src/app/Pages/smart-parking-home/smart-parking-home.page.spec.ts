import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmartParkingHomePage } from './smart-parking-home.page';

describe('SmartParkingHomePage', () => {
  let component: SmartParkingHomePage;
  let fixture: ComponentFixture<SmartParkingHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartParkingHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmartParkingHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
