import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ROUTES} from './router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES,{
      useHash:true
    })
  ],
  exports:[RouterModule]
})
export class JrRouterModule { }
