import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStockComponent } from './display-stock.component';

describe('DisplayStockComponent', () => {
  let component: DisplayStockComponent;
  let fixture: ComponentFixture<DisplayStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
