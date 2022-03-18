import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../../service/productService/product-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../models/Product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;

  formEdit!:FormGroup;

  product: Product = new Product(0, 0, "", "", true);

  constructor(private service: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.productDetail()
    });
  }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name,Validators.minLength(6)),
      img: new FormControl(this.product.img,[Validators.required, Validators.minLength(10)]),
      price: new FormControl(this.product.price,Validators.pattern('[1-4]')),
      status: new FormControl(this.product.status)
    })
  }

  productDetail() {
    this.service.findById(this.id).subscribe(data => {
      this.product = data;
      this.formEdit.controls['id']?.setValue(this.product.id)
      this.formEdit.controls['name']?.setValue(this.product.name)
      this.formEdit.controls['img']?.setValue(this.product.img)
      this.formEdit.controls['price']?.setValue(this.product.price)
      this.formEdit.controls['status']?.setValue(this.product.status)
    })
  }

  // showEdit(product: Product) {
  //   this.service.findById(product.id).subscribe(data => {
  //     this.product = data;
  //   })
  // }

  edit() {
    this.service.edit(this.formEdit.value).subscribe(() =>{
      alert("edit thanh cong")
      this.router.navigate(['/product']);
    })
  }
}
