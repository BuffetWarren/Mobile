import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilParrainPage } from './profil-parrain.page';

describe('ProfilParrainPage', () => {
  let component: ProfilParrainPage;
  let fixture: ComponentFixture<ProfilParrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilParrainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilParrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
