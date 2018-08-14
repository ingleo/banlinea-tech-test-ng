import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorFormComponent } from './conductor-form.component';

describe('ConductorFormComponent', () => {
  let component: ConductorFormComponent;
  let fixture: ComponentFixture<ConductorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
