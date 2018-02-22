import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TrampListComponent } from './tramp-list/tramp-list.component';
import { TrampItemComponent } from './tramp-item/tramp-item.component';
import { TrampService } from './tramp.service';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
    TrampListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TrampService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
