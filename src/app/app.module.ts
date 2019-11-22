import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MountainListComponent } from './mountains/mountain-list/mountain-list.component';
import { StarComponent } from './stars/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    MountainListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
