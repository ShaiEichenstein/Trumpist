import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TrampListComponent } from './tramp-list/tramp-list.component';
import { TrampItemComponent } from './tramp-item/tramp-item.component';
import { TrampService } from './tramp.service';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TrampListComponent,
    TrampItemComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TrampService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
