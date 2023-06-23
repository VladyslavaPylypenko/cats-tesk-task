import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatsPageComponent } from './modules/cats/pages/cats/cats-page.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./modules/shared/shared.module";
import {CatsModule} from "./modules/cats/cats.module";

@NgModule({
  declarations: [
    AppComponent,
    CatsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
