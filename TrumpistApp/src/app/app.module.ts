import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TrampListComponent } from './tramp-list/tramp-list.component';
import { TrampItemComponent } from './tramp-item/tramp-item.component';
import { TrampService } from './services/tramp.service';
import { HomePageComponent } from './home-page/home-page.component';
import { AlertModule } from 'ngx-bootstrap';
import { TrampGradeComponent } from './tramp-grade/tramp-grade.component';
import { TrampRequestListComponent } from './tramp-request-list/tramp-request-list.component';
import { TrampRequestItemComponent } from './tramp-request-item/tramp-request-item.component';
import { HttpService } from './services/http.service';


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
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TrampService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

/**
     * Allows for retrieving singletons using `AppModule.injector.get(MyService)`
     * This is good to prevent injecting the service as constructor parameter.
     */
  // static injector: Injector;
  // constructor(public appState: AppState, injector: Injector) {
  //   AppModule.injector = injector;
  // }

}
