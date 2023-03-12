import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { AngularMaterialModule } from '../shared/angular-material.module'; // https://gist.github.com/ArbitCode/78da9c31acc608d2039ce79c998239ba
import { FormsModule } from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    AngularMaterialModule,
    FormsModule
        
  ]
})
export class DemoModule { }
