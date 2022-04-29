import { PicturesModule } from './../pictures/pictures.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    BrowserModule,
    PicturesModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
})
export class ProductModule {}
