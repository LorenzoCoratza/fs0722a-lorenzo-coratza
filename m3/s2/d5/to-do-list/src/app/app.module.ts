import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedComponent } from './components/completed/completed.component';
import { ToDoComponent } from './components/to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    CompletedComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
