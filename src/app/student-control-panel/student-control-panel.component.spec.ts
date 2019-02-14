import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentControlPanelComponent } from './student-control-panel.component';

describe('StudentControlPanelComponent', () => {
  let component: StudentControlPanelComponent;
  let fixture: ComponentFixture<StudentControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
