import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nip-form',
  templateUrl: './nip-form.component.html',
  styleUrls: ['./nip-form.component.sass']
})
export class NipFormComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() control: string = 'nip';
  @Input() label: string = 'nip.number';

  constructor() { }

  ngOnInit(): void {
  }

}
