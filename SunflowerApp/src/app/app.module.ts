import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunComponent } from './sun/sun.component';
import { FlowerComponent } from './flower/flower.component';

@NgModule({
  declarations: [
    AppComponent,
    SunComponent,
    FlowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
