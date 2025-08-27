import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListBordComponent } from './job-list-bord.component';

describe('JobListBordComponent', () => {
  let component: JobListBordComponent;
  let fixture: ComponentFixture<JobListBordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobListBordComponent]
    });
    fixture = TestBed.createComponent(JobListBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
