import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  productStyle = {
    width:'70%',
    border: '1px solid black',
    padding: '10px',
    filter: 'sepia(0)'
  }
  product = {
    img: 'assets/imgReloj.jpg',
    name: 'Reloj',
    price: 100.0,
    description: 'Reloj de pared',
    quantity: 10
  }

  onMouseEnter = () => {
    this.productStyle = { ...this.productStyle, filter: 'sepia(0.5)'}
  }

  onMouseLeave = () => {
    this.productStyle = { ...this.productStyle, filter: 'sepia(0)'}
  }
}
