import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcomComponent } from './formcom.component';

describe('FormcomComponent', () => {
  let component: FormcomComponent;
  let fixture: ComponentFixture<FormcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
