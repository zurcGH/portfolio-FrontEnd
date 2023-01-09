import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexpComponent } from './workexp.component';

describe('WorkexpComponent', () => {
  let component: WorkexpComponent;
  let fixture: ComponentFixture<WorkexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
