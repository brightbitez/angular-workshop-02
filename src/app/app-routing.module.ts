import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { ProductListComponent} from './product-list/product-list.component';
import {AuthGuard} from './auth.guard';
import { ProductSpecificComponent} from './product-specific/product-specific.component';
const routes: Routes = [{ 
  path: 'login', component : LoginComponent}
, {path: 'list', component: ProductListComponent},
  {
    path: 'list/:name',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list/product/:id',
    component: ProductSpecificComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
