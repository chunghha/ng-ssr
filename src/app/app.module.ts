import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
