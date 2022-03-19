import { DropdownModule } from '../dropdown/dropdown.module';
import { FilterComponent } from './filter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule
  ],
  providers: [],
  exports: [
    FilterComponent
  ]
})

export class FilterModule { }
