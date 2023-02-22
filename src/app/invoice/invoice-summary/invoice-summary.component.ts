import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.sass']
})
export class InvoiceSummaryComponent implements OnInit, OnDestroy {

  @Input() group: FormGroup;

  public vatValueSum: number;
  public nettoValueSum: number;
  public grossValueSum: number;
  private detailsSubscription: Subscription;
  private details: FormArray;

  constructor() { }

  ngOnInit(): void {
    this.details = this.group.controls['details'] as FormArray;
    this.subscribeOnDetailsChanged();
  }

  private subscribeOnDetailsChanged(): void {
    this.detailsSubscription = this.details.valueChanges.subscribe(newDetails => {
      this.calculateNettoValueSum(newDetails);
      this.calculateVatValueSum(newDetails);
      this.calculateGrossValueSum(newDetails);
    });
  }

  private calculateNettoValueSum(newDetails: any[]): void {
    this.nettoValueSum = newDetails.reduce((acc, cur) => acc + Number(cur.nettoValue), 0);
  }

  private calculateVatValueSum(newDetails: any[]): void {
    this.vatValueSum = newDetails.reduce((acc, cur) => acc + Number(cur.vatValue), 0);
  }

  private calculateGrossValueSum(newDetails: any[]): void {
    this.grossValueSum = newDetails.reduce((acc, cur) => acc + Number(cur.grossValue), 0);
  }

  ngOnDestroy(): void {
    if (this.detailsSubscription) {
      this.detailsSubscription.unsubscribe();
    }
  }

}
