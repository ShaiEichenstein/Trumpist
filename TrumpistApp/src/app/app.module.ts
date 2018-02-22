import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TrampListComponent } from './tramp-list/tramp-list.component';
import { TempItemComponent } from './temp-item/temp-item.component';
=======
import { TrampItemComponent } from './tramp-item/tramp-item.component';
>>>>>>> 710df4553ccddfa79b3aa80ec4f22277d86a516a


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TrampListComponent,
    TempItemComponent
=======
    TrampItemComponent
>>>>>>> 710df4553ccddfa79b3aa80ec4f22277d86a516a
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
