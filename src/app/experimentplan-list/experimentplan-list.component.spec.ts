import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentplanListComponent } from './experimentplan-list.component';

describe('ExperimentplanListComponent', () => {
  let component: ExperimentplanListComponent;
  let fixture: ComponentFixture<ExperimentplanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentplanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperimentplanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
