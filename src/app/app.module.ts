import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from 'app/app-routing.module';
import {NavbarComponent} from 'app/layouts/navbar/navbar.component';
import {FooterComponent} from 'app/layouts/footer/footer.component';
import {MainComponent} from 'app/layouts/main/main.component';
import {PagesModule} from 'app/pages/pages.module';
import {SharedModule} from 'app/shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {
}
