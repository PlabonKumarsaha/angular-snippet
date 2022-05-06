import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductbyDateComponent } from './view-productby-date.component';

describe('ViewProductbyDateComponent', () => {
  let component: ViewProductbyDateComponent;
  let fixture: ComponentFixture<ViewProductbyDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductbyDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductbyDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
