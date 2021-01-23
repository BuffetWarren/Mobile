import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListechatPageRoutingModule } from './listechat-routing.module';

import { ListechatPage } from './listechat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListechatPageRoutingModule
  ],
  declarations: [ListechatPage]
})
export class ListechatPageModule {}
