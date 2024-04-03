import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {
  products: any[] = [];
  constructor(private http: HttpClient) { 
    this.fetchProducts();

    
}

fetchProducts() {
  this.http.get('https://fakestoreapi.com/products/20')
    .subscribe((response: any) => {
      console.log(response);
      this.products = response;
      console.log(response.image)
    }, error => {
      console.error('Failed to fetch products', error);
    });
}

}
