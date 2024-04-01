import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';

export const routes: Routes = [
    { path: 'ecommerce', component: EcommerceComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
