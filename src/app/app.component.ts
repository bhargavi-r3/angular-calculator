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
  title = 'Angulars_simple-cal';
  display: string = '';
  currentValue: string = '';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondOperand = false;

  appendNumber(value: string) {
    if (this.waitingForSecondOperand) {
      this.currentValue = value;
      this.waitingForSecondOperand = false;
    } else {
      this.currentValue += value;
    }

    this.display = this.operator
      ? `${this.firstOperand} ${this.operator} ${this.currentValue}`
      : this.currentValue;
  }

  chooseOperator(op: string) {
    if (this.currentValue === '') return;

    this.firstOperand = parseFloat(this.currentValue);
    this.operator = op;
    this.waitingForSecondOperand = true;

    this.display = `${this.firstOperand} ${this.operator}`;
    this.currentValue = '';
  }

  calculate() {
    if (this.operator && this.firstOperand !== null && this.currentValue !== '') {
      const secondOperand = parseFloat(this.currentValue);
      let result: number;

      switch (this.operator) {
        case '+':
          result = this.firstOperand + secondOperand;
          break;
        case '-':
          result = this.firstOperand - secondOperand;
          break;
        case '*':
          result = this.firstOperand * secondOperand;
          break;
        case '/':
          result = secondOperand !== 0 ? this.firstOperand / secondOperand : NaN;
          break;
        default:
          result = NaN;
      }

      this.display = ` ${isNaN(result) ? 'Error' : result.toString()}`;
      this.currentValue = result.toString();
      this.firstOperand = null;
      this.operator = null;
      this.waitingForSecondOperand = false;
    }
  }

  clear() {
    this.display = '';
    this.currentValue = '';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }
}

