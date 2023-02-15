import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.sass']
})
export class InvoiceComponent implements OnInit {

  invoiceForm: FormGroup = this.fb.group({
    nip: [''],
    currency: ['PLN'],
    createDate: [''],
    deliveryDate: [''],
    paymentTerm: [''],
    details: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
