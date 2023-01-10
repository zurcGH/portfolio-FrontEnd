import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkExpComponent } from './edit-work-exp.component';

describe('EditWorkExpComponent', () => {
  let component: EditWorkExpComponent;
  let fixture: ComponentFixture<EditWorkExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWorkExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWorkExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
