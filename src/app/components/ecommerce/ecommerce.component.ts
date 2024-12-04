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
