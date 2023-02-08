import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentplanComponent } from './experimentplan.component';

describe('ExperimentplanComponent', () => {
  let component: ExperimentplanComponent;
  let fixture: ComponentFixture<ExperimentplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperimentplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
