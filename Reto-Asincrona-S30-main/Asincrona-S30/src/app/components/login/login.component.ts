import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private authen: AutenticacionService, private route: Router){}

  redireccion='/registro';

  datos: any[]=[
    {username: 'mari', pass: '12345'}
  ]

  name: string = "";
  pass: string = "";
  
  logeado=false;
  hide = true;
  
  Login(){
    if(this.name=="" || this.pass==""){
      return;
    }else{

      for(let i=0; i<this.datos.length; i++){
        if(this.datos[i].username==this.name && this.datos[i].pass==this.pass){
          this.authen.login();
          this.redireccion = this.authen.urlUsuarioIntentaAcceder;
          this.authen.urlUsuarioIntentaAcceder = '/registro';
          this.route.navigate([this.redireccion]);
          this.logeado=true;
        }
      }
    }
  }

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.username.hasError('required') && this.password.hasError('required')) {
      return 'Campo requerido';
    }

    return this.username.hasError('username') ? 'Usuario no valido' : '';
  }


}
