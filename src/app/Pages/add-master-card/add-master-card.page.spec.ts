import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMasterCardPage } from './add-master-card.page';

describe('AddMasterCardPage', () => {
  let component: AddMasterCardPage;
  let fixture: ComponentFixture<AddMasterCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMasterCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMasterCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
