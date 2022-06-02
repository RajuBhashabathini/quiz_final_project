import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsquizComponent } from './awsquiz.component';

describe('AwsquizComponent', () => {
  let component: AwsquizComponent;
  let fixture: ComponentFixture<AwsquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
