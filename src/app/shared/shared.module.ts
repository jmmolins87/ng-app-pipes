import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { PrimeMenuComponent } from './components/prime-menu/prime-menu.component';



@NgModule({
  declarations: [
    PrimeMenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    PrimeNgModule,
    PrimeMenuComponent
  ]
})
export class SharedModule { }
