import {NgModule} from '@angular/core';

import {SharedImportsModule} from 'app/shared/shared-imports.module';
import {PagesLazyRoutingModule} from 'app/pages/pages-lazy-routing.module';
import {PagesEagerRoutingModule} from 'app/pages/pages-eager-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedImportsModule,
    PagesEagerRoutingModule,
    PagesLazyRoutingModule
  ]
})
export class PagesModule {
}
