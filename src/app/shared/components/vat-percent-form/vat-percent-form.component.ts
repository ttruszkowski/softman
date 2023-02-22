import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vat-percent-form',
  templateUrl: './vat-percent-form.component.html',
  styleUrls: ['./vat-percent-form.component.sass']
})
export class VatPercentFormComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() control: string = 'vatPercent';
  @Input() label: string = 'vatPercent';
  @Output() vatPercentChange: EventEmitter<number> = new EventEmitter();

  public vatPercents: { value: number, label: string}[] = [
    { value: 0.05, label: '5%'},
    { value: 0.08, label: '8%'},
    { value: 0.17, label: '17%'},
    { value: 0.23, label: '23%'},
    { value: 0.3, label: '30%'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  emitNewVatPercent(event): void {
    this.vatPercentChange.emit(event);
  }

}
