import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnearnComponent } from './learnearn.component';

describe('LearnearnComponent', () => {
  let component: LearnearnComponent;
  let fixture: ComponentFixture<LearnearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
