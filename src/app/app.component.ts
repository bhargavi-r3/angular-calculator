import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simple-calculator';

  num1 = 0;
  num2 = 0;
  result: number | string = '';

  add() {
    this.result = this.num1 + this.num2;
  }

  subtract() {
    this.result = this.num1 - this.num2;
  }

  multiply() {
    this.result = this.num1 * this.num2;
  }

  divide() {
    this.result = this.num2 !== 0 ? this.num1 / this.num2 : 'Cannot divide by zero';
  }

  clear() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = '';
  }
}
