import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  product = {
    brand: 'Banana Republic',
    category: 'Shirts',
    countInStock: 5,
    createdAt: '2021-04-11T01:39:59.538Z',
    description: 'high quality product',
    image: '/images/p5.jpg',
    name: 'White Lace Layered Tee',
    numReviews: 10,
    price: 30,
    rating: 4.5,
    updatedAt: '2021-04-11T01:39:59.538Z',
    __v: 0,
    _id: '6072536fc016890004ce6063',
  };
}
