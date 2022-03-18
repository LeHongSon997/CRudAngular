import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShowProductComponent} from "./detail/show-product.component";
import {ProductComponent} from "./product.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";
import {CreateComponent} from "./create/create.component";



const routes: Routes = [
  {path: 'detail/:id', component: ShowProductComponent},
  {path: 'managerProduct', component: ProductComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})



export class ProductRoutingModule { }
