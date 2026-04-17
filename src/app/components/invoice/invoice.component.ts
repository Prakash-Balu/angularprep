import { Component } from '@angular/core';
import { CurrencyFormatPipe } from '../../pipes/currency-format.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Invoices {
  id: string;
  item: string;
  amount: number;
  currency: string;
}

@Component({
  selector: 'app-invoice',
  imports: [CurrencyFormatPipe, CommonModule, FormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {

  invDetails: Invoices = {
    id: '',
    item: '',
    amount: 0,
    currency: 'USD'
  };

  invoices: Invoices[] = [
    { id: 'INV001', item: 'Laptop',   amount: 1299.99, currency: 'USD' },
    { id: 'INV002', item: 'Mouse',    amount: 29.50,   currency: 'EUR' },
    { id: 'INV003', item: 'Monitor',  amount: 45999,   currency: 'INR' },
    { id: 'INV004', item: 'Keyboard', amount: 75.00,   currency: 'GBP' },
  ];

  // addItem() {
  //   this.invoices.push({
  //     id: 'INV005', item: 'Headset', amount: 199.99, currency: 'USD'
  //   });
  // }

  addItem() {
    this.invoices.push({ ...this.invDetails });
    this.resetForm();
  }

  removeItem(index: number) {
    this.invoices.splice(index, 1);
  }

  resetForm() {
    this.invDetails = { id: '', item: '', amount: 0, currency: 'USD' };
  }
}
