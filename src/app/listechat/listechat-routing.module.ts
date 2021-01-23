import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListechatPage } from './listechat.page';

const routes: Routes = [
  {
    path: '',
    component: ListechatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListechatPageRoutingModule {}
