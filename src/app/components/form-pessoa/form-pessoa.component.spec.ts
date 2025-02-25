import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPessoaComponent } from './form-pessoa.component';

describe('FormPessoaComponent', () => {
  let component: FormPessoaComponent;
  let fixture: ComponentFixture<FormPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPessoaComponent]
    });
    fixture = TestBed.createComponent(FormPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
