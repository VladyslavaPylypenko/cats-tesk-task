import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CatsFormComponent} from "./components/cats-form/cats-form.component";
import {CatsComponent} from "./components/cats/cats.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    CatsFormComponent,
    CatsComponent
  ],
  exports: [
    CatsComponent,
    CatsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
  ]
})
export class CatsModule { }
