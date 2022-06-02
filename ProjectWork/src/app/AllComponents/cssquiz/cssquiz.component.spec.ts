import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssquizComponent } from './cssquiz.component';

describe('CssquizComponent', () => {
  let component: CssquizComponent;
  let fixture: ComponentFixture<CssquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
