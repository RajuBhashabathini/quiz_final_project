import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlquizComponent } from './htmlquiz.component';

describe('HtmlquizComponent', () => {
  let component: HtmlquizComponent;
  let fixture: ComponentFixture<HtmlquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
