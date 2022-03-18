import { Component, OnInit } from '@angular/core';
import {Product} from "../../../models/Product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProductServiceService} from "../../service/productService/product-service.service";
import {Router} from "@angular/router";
import {Category} from "../../../models/Category";
import {CategoryService} from "../../service/categoryService/category.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product!:Product;
  category!: Category;

  formCreate!: FormGroup;
  constructor(private http: HttpClient, private productService: ProductServiceService, private router: Router,private categoryService: CategoryService) {
    this.productService.findAll()
  }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("",Validators.minLength(6)),
      img: new FormControl(null,[Validators.required, Validators.minLength(10)]),
      price: new FormControl(0,Validators.pattern('[1-4]')),
      status: new FormControl(true),
      category: new FormControl(this.category)
    })
  }

  

  create() {
    this.productService.create(this.formCreate.value).subscribe(() => {
      alert("Create thanh cong")
      this.router.navigate(['/product']);
    })
  }

}
