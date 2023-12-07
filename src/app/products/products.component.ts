import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  classPageTitle: string="text-center";
  stylePageTitle={
    'color':'red',
    'margin':'20px'
  }
  mainThemecolor:string='Green';
 products =[
  {  id:1,
    title:"glass",
    price:100,
    color:"black",
    discount: 10,
    photo:"../assets/products/product-1.avif",
 },
 {  id:2,
  title:"table",
  price:100,
  color:"blue",
  discount: 10,
  photo:"../assets/products/product-2.avif",
},
{  id:3,
  title:"shose",
  price:100,
  color:"red",
  discount: 10,
  photo:"../assets/products/product-3.avif",
},
{  id:4,
  title:"cleancer",
  price:100,
  color:"yellow",
  discount: 10,
  photo:"../assets/products/product-4.avif",
},
{  id:5,
  title:"car",
  price:100,
  color:"yellow",
  discount: 10,
  photo:"../assets/products/product-5.avif",
},
{  id:6,
  title:"watch",
  price:100,
  color:"red",
  discount: 10,
  photo:"../assets/products/product-6.avif",
},
{  id:7,
  title:"headphone",
  price:100,
  color:"black",
  discount: 10,
  photo:"../assets/products/product-7.avif"
}
]
 }
