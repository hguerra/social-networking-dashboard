import {NgModule} from '@angular/core';

import {HomeRoutingModule} from 'app/pages/home/home-routing.module';
import {HomeComponent} from 'app/pages/home/home.component';
import {SharedImportsModule} from 'app/shared/shared-imports.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedImportsModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
