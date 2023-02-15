import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NipFormComponent } from './nip-form.component';

describe('NipFormComponent', () => {
  let component: NipFormComponent;
  let fixture: ComponentFixture<NipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NipFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
