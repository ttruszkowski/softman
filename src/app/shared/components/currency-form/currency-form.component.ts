import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.sass']
})
export class CurrencyFormComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() control: string = 'currency';
  @Input() label: string = 'currency';

  public currencies: string[] = [
    'PLN', 'EUR', 'USD', 'CHF'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
