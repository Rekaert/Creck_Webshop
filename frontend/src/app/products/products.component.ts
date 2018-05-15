import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  newProduct: object = {
    name: '',
    url: '',
    manufacturer: '',
    cost: '',
    image: ''
  };

  products: any = [];


  constructor(public http: Http) {
    this.getAll();
  }

  ngOnInit() { }

  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error:' + JSON.stringify(res.error));
    } else {
      this.products = res;
      console.log(this.products);
    }
  }


  /**
   * List products in the datas array
   */
  getAll() {
    this.http.get('http://localhost:8080/product').subscribe(
      data => {
        this.products = JSON.parse(data['_body']);
        this.errorHandling(data);
      });
  }

  /**
   * Create new product
   */

  create() {
    this.http.post('http://localhost:8080/product', this.newProduct)
      .subscribe((data) => {
        this.newProduct = JSON.parse(data['_body']);
        this.getAll();
        // this.newProduct = {};
      });
  }

  /**
   * Update product by given id
   */

  update(product) {
    this.http.put('http://localhost:8080/product' + product._id, product)
      .subscribe((data) => {
        this.errorHandling(data);
        this.getAll();
      });
  }

  /**
   * Delete product by given id
   */

  delete(product) {
    this.http.delete('http://localhost:8080/product/' + product._id)
      .subscribe((data) => {
        this.errorHandling(data);
        console.log(data);
        this.getAll();
      });
  }

}

