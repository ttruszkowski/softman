import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.sass']
})
export class InvoiceDetailsComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() details: AbstractControl;
  @Input() control: string = 'details';
  constructor() { }

  ngOnInit(): void {
    this.details = this.group.controls[this.control];
  }

}
