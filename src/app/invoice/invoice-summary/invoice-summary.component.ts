import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.sass']
})
export class InvoiceSummaryComponent implements OnInit {

  @Input() group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
