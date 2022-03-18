
import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductServiceService} from "../service/productService/product-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = []

  formCreate!: FormGroup;

  constructor(private http: HttpClient, private productService: ProductServiceService, private activeRouter: ActivatedRoute, private router: Router) {
    this.findAll();
  }
  product: Product = new Product(0, 0, "", "", true);

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("",Validators.minLength(6)),
      img: new FormControl(null,[Validators.required, Validators.minLength(10)]),
      price: new FormControl(0,Validators.pattern('[1-4]')),
      status: new FormControl(true)
    })
  }

  findAll() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    }, error => {})
  }
}
