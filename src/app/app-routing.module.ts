import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./product/home/home.component";
import {ProductComponent} from "./product/product.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: '', component: HomeComponent },
  {
    path: 'admin', loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
