import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodequizComponent } from './nodequiz.component';

describe('NodequizComponent', () => {
  let component: NodequizComponent;
  let fixture: ComponentFixture<NodequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
