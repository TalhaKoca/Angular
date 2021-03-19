import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'https://localhost:44326/api/categories/getall';
  constructor(private httpClient: HttpClient) {}
  // HttpClient türünde(:) bir nesne istiyorum anlamına gelir.

  getCategories():Observable<ListResponseModel<Category>> {
      return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)
      //gelen datayı ProductResponseModel ine map edeceksin haberin olsun demek...
      
  }
}