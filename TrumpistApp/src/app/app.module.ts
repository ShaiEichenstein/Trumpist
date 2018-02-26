import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { LoginService } from './services/login.service';
import { LoginComponent } from './login/login.component';



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
    TrampRequestItemComponent,
<<<<<<< HEAD
    LoginComponent
=======
>>>>>>> d545ba9efa931d7812c46e2e86b172f7524890b5
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    TrampService,
    HttpService,
    LoginService
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
