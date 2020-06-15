import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlexComponent } from './alex/alex.component';
import { CathyComponent } from './cathy/cathy.component';
import { CraigComponent } from './craig/craig.component';
import { CarolComponent } from './carol/carol.component';

@NgModule({
  declarations: [
    AppComponent,
    AlexComponent,
    CathyComponent,
    CraigComponent,
    CarolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
