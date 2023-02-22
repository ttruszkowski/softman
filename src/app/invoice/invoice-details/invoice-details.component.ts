import { DecimalPipe, formatNumber } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.sass']
})
export class InvoiceDetailsComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() details: any;
  @Input() control: string = 'details';

  constructor(
    private fb: FormBuilder,
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit(): void {
    this.details = this.group.controls[this.control] as FormArray;
  }

  addNewDetailRow(): void {
    const detailForm = this.fb.group({
      vatPercent: [0.23],
      nettoValue: [0.00],
      vatValue: [0.00],
      grossValue: [0.00]
    });

    this.details.push(detailForm);
  }

  deleteRowItem(detailIndex: number): void {
    this.details.removeAt(detailIndex);
  }

  transformAmount(element, index: number, fieldName: string): void {
    const transformedValue = this.transformValue(element.target.value);
    element.target.value = transformedValue;
    this.transformValueInForm(transformedValue, index, fieldName);
  }

  onNettoValueInput(event, i): void {
    const nettoValue = Number(event.target.value);
    const vatPercent = Number(this.details.at(i).controls['vatPercent'].value);
    const newVatValue = nettoValue * vatPercent;
    const newGrossValue = nettoValue + newVatValue;
    this.patchDetailItem(this.transformValue(newVatValue), i, 'vatValue');
    this.patchDetailItem(this.transformValue(newGrossValue), i, 'grossValue');
  }

  onVatValueInput(event, i): void {
    const vatValue = Number(event.target.value);
    const nettoValue = Number(this.details.at(i).controls['nettoValue'].value);
    const newGrossValue = nettoValue + vatValue;
    this.patchDetailItem(this.transformValue(newGrossValue), i, 'grossValue');
  }

  onVatPercentChange(event, i): void {
    const newPercent = event.value;
    const nettoValue = Number(this.details.at(i).controls['nettoValue'].value);
    const newVatValue = newPercent * nettoValue;
    const newGrossValue = newVatValue + nettoValue;
    this.patchDetailItem(this.transformValue(newVatValue), i, 'vatValue', true);
    this.patchDetailItem(this.transformValue(newGrossValue), i, 'grossValue', true);
  }

  private transformValue(value): string {
    return this.decimalPipe.transform(value, '1.2-2');
  }

  private transformValueInForm(transformedValue, index, field): void {
    this.details.at(index).controls[field].patchValue(transformedValue);
  }

  private patchDetailItem(newValue, index, field, emitEvent = false): void {
    this.details.at(index).controls[field].patchValue(newValue, {
      emitEvent: emitEvent
    });
  }

}
