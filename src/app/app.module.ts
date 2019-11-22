import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MountainListComponent } from './mountains/mountain-list/mountain-list.component';
import { StarComponent } from './stars/star/star.component';
import { AppRoutingModule } from './app-routing.module';
import { MountainCreateComponent } from './mountains/mountain-create/mountain-create.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MountainListComponent,
    StarComponent,
    MountainCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
