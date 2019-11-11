import {NgModule} from '@angular/core';

import {SharedImportsModule} from 'app/shared/shared-imports.module';
import {HomeModule} from 'app/pages/home/home.module';
import {PageRoutingModule} from 'app/pages/page-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedImportsModule,
    PageRoutingModule,
    HomeModule
  ]
})
export class PagesModule {
}
