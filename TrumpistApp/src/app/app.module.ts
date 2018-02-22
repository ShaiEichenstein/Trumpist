import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TrampListComponent } from './tramp-list/tramp-list.component';
import { TempItemComponent } from './temp-item/temp-item.component';
import { TrampItemComponent } from './tramp-item/tramp-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TrampListComponent,
    TempItemComponent,
    TrampItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
