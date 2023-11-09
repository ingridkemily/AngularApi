import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioDetalhesComponent } from './usuario-detalhes/usuario-detalhes.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  usuarios:any = [];
  constructor(private usuarioService : UsuarioService,
    private modalService: NgbModal) {}

  ngOnInit(): void {
    this.obterusuarios().subscribe((data: any) => {
      this.usuarios = data;
    });
  }

  obterusuarios() {
    return this.usuarioService.obterUsuario();
  }

  abrirModal() {
    const modalRef = 
    this.modalService.open(UsuarioDetalhesComponent);
    modalRef.result.then((retornoModal:any) => {
      this.obterusuarios().subscribe((data:any) => {
        this.usuarios = data;
      });
    });
  }
}
