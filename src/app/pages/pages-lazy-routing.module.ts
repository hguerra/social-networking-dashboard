import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

// https://angular.io/guide/lazy-loading-ngmodules
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PagesLazyRoutingModule {
}
