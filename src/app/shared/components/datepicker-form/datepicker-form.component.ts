import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepicker-form',
  templateUrl: './datepicker-form.component.html',
  styleUrls: ['./datepicker-form.component.sass']
})
export class DatepickerFormComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() control: string = 'date';
  @Input() label: string = 'date';
  constructor() { }

  ngOnInit(): void {
  }

}
