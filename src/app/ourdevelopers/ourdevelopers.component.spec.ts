import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurdevelopersComponent } from './ourdevelopers.component';

describe('OurdevelopersComponent', () => {
  let component: OurdevelopersComponent;
  let fixture: ComponentFixture<OurdevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurdevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurdevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
