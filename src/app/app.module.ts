import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    { path: 'contactmanager/', loadChildren: () => import('./contactmanager/contactmanager.module').then(m => m.ContactManagerModule) },
    { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
    { path: '**', redirectTo: 'contactmanager/' }];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
