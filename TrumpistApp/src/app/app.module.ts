import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TrampListComponent } from './tramp-list/tramp-list.component';
import { TrampItemComponent } from './tramp-item/tramp-item.component';
import { TrampService } from './tramp.service';
import { HomePageComponent } from './home-page/home-page.component';
import { AlertModule } from 'ngx-bootstrap';
import { TrampGradeComponent } from './tramp-grade/tramp-grade.component';
import { TrampRequestListComponent } from './tramp-request-list/tramp-request-list.component';
import { TrampRequestItemComponent } from './tramp-request-item/tramp-request-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TrampListComponent,
    TrampItemComponent,
    HomePageComponent,
    TrampGradeComponent,
    TrampRequestListComponent,
    TrampRequestItemComponent
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
