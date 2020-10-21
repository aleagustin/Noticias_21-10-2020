import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL = "http://localhost:3000"
  
  constructor(private http: HttpClient) { }

getLogin(email, contrasena){

  /**
   * El error que tenia era que estaba llamando a una propiedad URL y no ha mi variable
   * al no haberle puesto el this.URL ha codigo esas propiedad de angular.
   */
  return this.http.post(this.URL + "/login",{"email":email, "contrasena":contrasena })

}


}
