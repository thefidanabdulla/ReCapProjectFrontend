import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ReCapProjectFrontend';
  user: string = "Fidan Abdulla";
  product1: any = {
    productId: 1,
    productName: 'SmartPen',
    categoryId: 1,
    unitPrice: 25
  };
  product2: any = {
    productId: 2,
    productName: 'Laptop',
    categoryId: 3,
    unitPrice: 25
  };
  product3: any = {
    productId: 3,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 25
  };
  product4: any = {
    productId: 4,
    productName: 'Keyboard',
    categoryId: 1,
    unitPrice: 25
  };
  product5: any = {
    productId: 5,
    productName: 'Camera',
    categoryId: 1,
    unitPrice: 25
  };
  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5
  ]
}
