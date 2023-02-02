import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private formBuilder: FormBuilder){}

  registroUsuario = this.formBuilder.group({
    nombre:['', { validators:[Validators.required]}], 
    usuario:['', { validators:[Validators.required]}], 
    password: ['', [Validators.required]]
  
  });
  
  get nombre(){ return this.registroUsuario.get('nombre'); }
  get usuario(){ return this.registroUsuario.get('usuario'); }
  get password(){ return this.registroUsuario.get('password'); }
  
  datosAgregar = new Array;
  
  mensaje = '';
  
  onSubmit(){
    if(!this.registroUsuario.valid){
      this.mensaje="";
      return;
    }else{
      this.mensaje="Registro Exitoso";
    }
   
    // Para agregar datos a la tabla
    this.datosAgregar.push({
      'Nombre': this.registroUsuario.get('nombre')?.value,
      'Usuario': this.registroUsuario.get('usuario')?.value,
      'Password': this.registroUsuario.get('password')?.value,
    });
    console.log(this.datosAgregar);
  
    }

  
}
