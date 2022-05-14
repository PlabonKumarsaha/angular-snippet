import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL:string = "http://localhost:8000/products/";
  viewProd : string =  "http://localhost:8000/products/";

  constructor(private http: HttpClient) { }

  createProduct(productData: any){
  return this.http.post(this.baseURL,productData);
  }

  viewProduct(id : any){
    return this.http.get(this.viewProd+id);
  }

  updateroduct(id : any,productData: any){
    return this.http.put(this.viewProd+id,productData);
  }

   searchProductByCategory(categoryid : any){
    let viewProdByCategory =  "http://localhost:8000/products/category="+categoryid;
    return this.http.get(viewProdByCategory);
  }

  searchProductByDate(date : any){
    let viewProdByDate =  "http://localhost:8000/products/date="+date;
    return this.http.get(viewProdByDate);
  }
}
