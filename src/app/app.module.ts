import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileproductComponent } from './shared/component/mobileproduct/mobileproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileproductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
