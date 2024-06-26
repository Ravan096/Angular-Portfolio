import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,RouterModule,HeaderComponent,HomeComponent,EcommerceComponent,ProductdetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
