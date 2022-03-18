import { Component, OnInit } from '@angular/core';
import {Product} from "../../../models/Product";
import {ProductServiceService} from "../../service/productService/product-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id!: number;
  constructor(private service: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.productDetail()
    });
  }

  ngOnInit(): void {
  }

  product: Product = new Product(0, 0, "", "", true);

  productDetail() {
    this.service.findById(this.id).subscribe(data => {
      this.product = data;
      console.log(this.product);
    })
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => {
      alert("Xoa thanh cong")
      this.router.navigate(['/product']);
    })
  }

}
