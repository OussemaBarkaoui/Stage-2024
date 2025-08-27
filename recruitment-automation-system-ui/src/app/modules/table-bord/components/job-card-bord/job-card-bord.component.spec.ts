import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardBordComponent } from './job-card-bord.component';

describe('JobCardBordComponent', () => {
  let component: JobCardBordComponent;
  let fixture: ComponentFixture<JobCardBordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobCardBordComponent]
    });
    fixture = TestBed.createComponent(JobCardBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
