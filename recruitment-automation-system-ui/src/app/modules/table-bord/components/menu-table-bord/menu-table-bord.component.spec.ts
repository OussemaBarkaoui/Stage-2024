import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTableBordComponent } from './menu-table-bord.component';

describe('MenuTableBordComponent', () => {
  let component: MenuTableBordComponent;
  let fixture: ComponentFixture<MenuTableBordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTableBordComponent]
    });
    fixture = TestBed.createComponent(MenuTableBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
