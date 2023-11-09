import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) {}
  obterUsuario() {
    return this.http.get(environment.urlApi + 'usuarios');
  }

  inserirUsuario(usuario : any) {
    return this.http.post(environment.urlApi+'usuarios', usuario);
  }
}
