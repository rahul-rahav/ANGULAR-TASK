import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdListComponent } from './prod-list/prod-list.component';

const routes: Routes = [
  {path:"homeComponent", component: HomeComponent},
  {path:"prodList", component: ProdListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
