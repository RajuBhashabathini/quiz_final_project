import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticecomponentComponent } from './practicecomponent.component';

describe('PracticecomponentComponent', () => {
  let component: PracticecomponentComponent;
  let fixture: ComponentFixture<PracticecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
