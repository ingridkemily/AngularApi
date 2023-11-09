import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetalhesComponent } from './usuario-detalhes.component';

describe('UsuarioDetalhesComponent', () => {
  let component: UsuarioDetalhesComponent;
  let fixture: ComponentFixture<UsuarioDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioDetalhesComponent]
    });
    fixture = TestBed.createComponent(UsuarioDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
