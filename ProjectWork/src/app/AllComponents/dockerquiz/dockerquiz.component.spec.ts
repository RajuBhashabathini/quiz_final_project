import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerquizComponent } from './dockerquiz.component';

describe('DockerquizComponent', () => {
  let component: DockerquizComponent;
  let fixture: ComponentFixture<DockerquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
