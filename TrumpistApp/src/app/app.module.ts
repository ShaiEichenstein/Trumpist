import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TrampListComponent } from './tramp-list/tramp-list.component';
import { TempItemComponent } from './temp-item/temp-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TrampListComponent,
    TempItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
