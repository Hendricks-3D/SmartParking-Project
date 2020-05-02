import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddUpayPage } from './add-upay.page';

describe('AddUpayPage', () => {
  let component: AddUpayPage;
  let fixture: ComponentFixture<AddUpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddUpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
