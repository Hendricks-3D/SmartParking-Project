import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoreTeamPage } from './core-team.page';

describe('CoreTeamPage', () => {
  let component: CoreTeamPage;
  let fixture: ComponentFixture<CoreTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoreTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
