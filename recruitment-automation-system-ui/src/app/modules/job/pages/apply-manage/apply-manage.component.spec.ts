import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyManageComponent } from './apply-manage.component';

describe('ApplyManageComponent', () => {
  let component: ApplyManageComponent;
  let fixture: ComponentFixture<ApplyManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyManageComponent]
    });
    fixture = TestBed.createComponent(ApplyManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
