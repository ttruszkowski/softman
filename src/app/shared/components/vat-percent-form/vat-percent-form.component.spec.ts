import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatPercentFormComponent } from './vat-percent-form.component';

describe('VatPercentFormComponent', () => {
  let component: VatPercentFormComponent;
  let fixture: ComponentFixture<VatPercentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VatPercentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VatPercentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
