import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppMainNavigationComponent } from './components/app-main-navigation/app-main-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
