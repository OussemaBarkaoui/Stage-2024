import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobsBordComponent } from './manage-jobs-bord.component';

describe('ManageJobsBordComponent', () => {
  let component: ManageJobsBordComponent;
  let fixture: ComponentFixture<ManageJobsBordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageJobsBordComponent]
    });
    fixture = TestBed.createComponent(ManageJobsBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
