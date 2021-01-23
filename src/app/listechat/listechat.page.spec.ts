import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListechatPage } from './listechat.page';

describe('ListechatPage', () => {
  let component: ListechatPage;
  let fixture: ComponentFixture<ListechatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListechatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListechatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
