import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputAComponent } from './input-a/input-a.component';
import { InputBComponent } from './input-b/input-b.component';
import { InputCComponent } from './input-c/input-c.component';

@NgModule({
  declarations: [
    AppComponent,
    InputAComponent,
    InputBComponent,
    InputCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
