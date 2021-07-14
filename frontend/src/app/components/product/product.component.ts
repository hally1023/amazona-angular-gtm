import { Component, Input, OnInit } from '@angular/core';

interface Product {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  countInStock: number;
  brand: string;
  rating: number;
  numReviews: number;
  description: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;
  constructor() {}

  ngOnInit(): void {}
}
