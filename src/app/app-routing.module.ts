import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MountainListComponent} from './mountains/mountain-list/mountain-list.component';
import {MountainCreateComponent} from './mountains/mountain-create/mountain-create.component';

const routes: Routes = [
  {path: '', component: MountainListComponent},
  {path: 'mountains/create', component: MountainCreateComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
