import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobsBordComponent } from './update-jobs-bord.component';

describe('UpdateJobsBordComponent', () => {
  let component: UpdateJobsBordComponent;
  let fixture: ComponentFixture<UpdateJobsBordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateJobsBordComponent]
    });
    fixture = TestBed.createComponent(UpdateJobsBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
