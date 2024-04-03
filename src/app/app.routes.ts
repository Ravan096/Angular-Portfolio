import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';

export const routes: Routes = [
  { path: 'ecommerce', component: EcommerceComponent },
  { path: '', component: HomeComponent },
  {path:'productDetail',component:ProductdetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
