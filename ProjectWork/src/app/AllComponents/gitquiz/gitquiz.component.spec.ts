import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitquizComponent } from './gitquiz.component';

describe('GitquizComponent', () => {
  let component: GitquizComponent;
  let fixture: ComponentFixture<GitquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
