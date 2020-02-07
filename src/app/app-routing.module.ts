import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankingProductComponent } from './pages/banking-product/banking-product.component';

const routes: Routes = [
  {path: 'banking-product', component: BankingProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
