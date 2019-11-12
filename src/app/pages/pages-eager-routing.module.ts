import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from 'app/pages/home/home.module';

// https://angular.io/guide/router
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeModule
  ]
})
export class PagesEagerRoutingModule {
}
