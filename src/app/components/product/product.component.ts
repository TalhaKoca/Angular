import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModels';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'https://localhost:44326/api/products/getall';
  constructor(private httpClient: HttpClient) {
    // HttpClient türünde(:) bir nesne istiyorum anlamına gelir.
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      //gelen datayı ProductResponseModel ine map edeceksin haberin olsun demek...
      .subscribe((response) => {
        this.products = response.data;
      });
  }
}
