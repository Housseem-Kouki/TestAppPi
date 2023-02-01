import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaluthiComponent } from './saluthi.component';

describe('SaluthiComponent', () => {
  let component: SaluthiComponent;
  let fixture: ComponentFixture<SaluthiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaluthiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaluthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
