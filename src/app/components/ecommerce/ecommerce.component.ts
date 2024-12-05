import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductdetailComponent } from '../productdetail/productdetail.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [HttpClientModule,CommonModule,ProductdetailComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {
  products: any[] = [];

   Latestproducts = [
    {
      id: 1,
      name: "Classic Spring",
      price: "$120.00",
      rating: 5,
      image: "assets/men-01.jpg",
    },
    {
      id: 2,
      name: "Air Force 1 X",
      price: "$90.00",
      rating: 5,
      image: "assets/men-02.jpg",
    },
    {
      id: 3,
      name: "Love Nana '20",
      price: "$150.00",
      rating: 5,
      image: "assets/men-03.jpg",
    },
    {
      id: 4,
      name: "New Green Jacket",
      price: "$75.00",
      rating: 5,
      image: "assets/women-01.jpg",
    },
    {
      id: 5,
      name: "Classic Dress",
      price: "$45.00",
      rating: 5,
      image: "assets/women-02.jpg",
    },
    {
      id: 6,
      name: "Spring Collection",
      price: "$130.00",
      rating: 5,
      image: "assets/women-03.jpg",
    },
    {
      id: 7,
      name: "School Collection",
      price: "$80.00",
      rating: 5,
      image: "assets/kid-01.jpg",
    },
    {
      id: 8,
      name: "Summer Cap",
      price: "$12.00",
      rating: 5,
      image: "assets/kid-02.jpg",
    },
    {
      id: 9,
      name: "Classic Kid",
      price: "$30.00",
      rating: 5,
      image: "assets/kid-03.jpg",
    },
  ];
  
  constructor(private http: HttpClient) { 
    this.fetchProducts();

    
}


getTruncatedTitle(title: string): string {
  return title.split(' ').slice(0, 3).join(' ') + '...';
}


fetchProducts() {
  this.http.get('https://fakestoreapi.in/api/products')
    .subscribe((response: any) => {
      console.log(response);
      console.log(response.products);
      this.products = response.products;
      // console.log(response[0].images[1])
    }, error => {
      console.error('Failed to fetch products', error);
    });
}

}
