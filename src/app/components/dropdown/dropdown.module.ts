import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownAnimatedComponent } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownAnimatedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  bootstrap: [
    DropdownAnimatedComponent
  ],
  providers: [],
  exports: [
    DropdownAnimatedComponent
  ]
})

export class DropdownModule { }
