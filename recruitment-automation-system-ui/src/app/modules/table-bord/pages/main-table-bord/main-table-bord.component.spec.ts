import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTableBordComponent } from './main-table-bord.component';

describe('MainTableBordComponent', () => {
  let component: MainTableBordComponent;
  let fixture: ComponentFixture<MainTableBordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTableBordComponent]
    });
    fixture = TestBed.createComponent(MainTableBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
