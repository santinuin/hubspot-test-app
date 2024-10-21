import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormComponent } from './template-form.component';

describe('FormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateFormComponent]
    });
    fixture = TestBed.createComponent(TemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
