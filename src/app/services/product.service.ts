import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44326/api/products/getall';
  constructor(private httpClient: HttpClient) {}
  // HttpClient türünde(:) bir nesne istiyorum anlamına gelir.

  getProducts():Observable<ProductResponseModel> {
      return this.httpClient.get<ProductResponseModel>(this.apiUrl)
      //gelen datayı ProductResponseModel ine map edeceksin haberin olsun demek...
      
  }
}
