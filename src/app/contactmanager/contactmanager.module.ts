import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { AngularMaterialModule } from '../shared/angular-material.module'; // https://gist.github.com/ArbitCode/78da9c31acc608d2039ce79c998239ba
import { FormsModule } from '@angular/forms';


const routes: Routes = [
    {
        path: '', component: ContactmanagerAppComponent,
        children: [
            { path: '', component: MainContentComponent },]
    },
    { path: '**', redirectTo: '' }];

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
    
  ],
  imports: [
      CommonModule,
      FlexLayoutModule,
      FormsModule,
      AngularMaterialModule,
      RouterModule.forChild(routes)
  ]
})
export class ContactManagerModule { }
