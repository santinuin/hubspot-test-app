import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateForm } from './template-form';

describe('FormComponent', () => {
  let component: TemplateForm;
  let fixture: ComponentFixture<TemplateForm>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateForm]
    });
    fixture = TestBed.createComponent(TemplateForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
