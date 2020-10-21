import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

email: any
contrasena: any

  constructor(private router: Router, private servicioUsuario:UsuariosService) { 

  }

  ngOnInit(): void {
  }

  goHome(){

    this.servicioUsuario.getLogin(this.email,this.contrasena).subscribe((res: any) => {

      if(res != null){
        localStorage.setItem("USER", JSON.stringify(res))
        console.log(res)
        this.router.navigate(["/home"])
      }else{
        alert("Usuario o contraseña Incorrecta")
      }


    })

    
  }


}
