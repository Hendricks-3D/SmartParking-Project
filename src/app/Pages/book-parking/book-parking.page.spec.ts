import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookParkingPage } from './book-parking.page';

describe('BookParkingPage', () => {
  let component: BookParkingPage;
  let fixture: ComponentFixture<BookParkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookParkingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookParkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
