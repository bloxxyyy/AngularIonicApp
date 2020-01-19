import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompetentiesPage } from './competenties.page';

describe('SocialPage', () => {
  let component: CompetentiesPage;
  let fixture: ComponentFixture<CompetentiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetentiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompetentiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
