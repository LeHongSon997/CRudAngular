import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/Product";
import {ProductServiceService} from "../../service/productService/product-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductServiceService) {
    this.findAll()
  }


  ngOnInit(): void {
  }

  findAll() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    }, error => {})
  }
}
