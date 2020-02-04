import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedWorkComponent } from './finished-work.component';

describe('FinishedWorkComponent', () => {
  let component: FinishedWorkComponent;
  let fixture: ComponentFixture<FinishedWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
