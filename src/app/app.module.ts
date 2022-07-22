//Svaka Angular app mora imati makar 1 root modul
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  //konfigurisanje modula

  //root modul:
  declarations: [
    AppComponent,
    DemoComponent
  ],
  //definisanje externih modula 
  imports: [
    //jedan od ugradjenih ng modula
    BrowserModule,
    FormsModule
  ],
  //svojstvo koje definise servise koje modul izlaze na koriscenje
  providers: [],
  bootstrap: [AppComponent]
})

//ng moduli se definisu pomocu obicne klasu na koju je postavljen poseban dekorator (@NgModule)
export class AppModule { }



