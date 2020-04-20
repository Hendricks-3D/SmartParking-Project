import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkingAreasPage } from './parking-areas.page';

describe('ParkingAreasPage', () => {
  let component: ParkingAreasPage;
  let fixture: ComponentFixture<ParkingAreasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAreasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingAreasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
