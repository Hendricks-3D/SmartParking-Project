import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkingInformationPage } from './parking-information.page';

describe('ParkingInformationPage', () => {
  let component: ParkingInformationPage;
  let fixture: ComponentFixture<ParkingInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
