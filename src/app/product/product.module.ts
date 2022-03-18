import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowProductComponent } from './detail/show-product.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import {CreateComponent} from "./create/create.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductRoutingModule} from "./product-routing.module";

@NgModule({
  declarations: [
    ShowProductComponent,
    EditComponent,
    DeleteComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
