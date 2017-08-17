import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerRoutingModule } from './beer-routing.module';
import { BeerComponent } from './beer.component';

@NgModule({
  imports: [
    CommonModule,
    BeerRoutingModule
  ],
  declarations: [BeerComponent]
})
export class BeerModule { }
