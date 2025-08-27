import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateAccountRecComponent } from './activate-account-rec.component';

describe('ActivateAccountRecComponent', () => {
  let component: ActivateAccountRecComponent;
  let fixture: ComponentFixture<ActivateAccountRecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivateAccountRecComponent]
    });
    fixture = TestBed.createComponent(ActivateAccountRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
