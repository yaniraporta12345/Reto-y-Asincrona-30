import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private formBuilder: FormBuilder){}

  registroPersonas = this.formBuilder.group({
    nombre:['', { validators:[Validators.required, Validators.pattern('^[A-Z a-z]+$')]}], 
    apellido:['', { validators:[Validators.required, Validators.pattern('^[A-Z a-z]+$')]}], 
    email:['', { validators:[Validators.required, Validators.email]}], 
    website: ['', [Validators.required]],
  
  });
  
  get nombre(){ return this.registroPersonas.get('nombre'); }
  get apellido(){ return this.registroPersonas.get('apellido'); }
  get email(){ return this.registroPersonas.get('email'); }
  get website(){ return this.registroPersonas.get('website'); }
  
  datosAgregar = new Array;
  
  mensaje = '';
  
  onSubmit(){
    if(!this.registroPersonas.valid){
      this.mensaje="Ingresa los campos, para agregar a la lista.";
      return;
    }else{
      this.mensaje="";
    }
   
    // Para agregar datos a la tabla
    this.datosAgregar.push({
      'Nombre': this.registroPersonas.get('nombre')?.value,
      'Apellido': this.registroPersonas.get('apellido')?.value,
      'Email': this.registroPersonas.get('email')?.value,
      'Website': this.registroPersonas.get('website')?.value,
    });
    console.log(this.datosAgregar);
  
    }

    
    Eliminar(indice:number){
      if(confirm('Está seguro que desea eliminar?')){
      this.datosAgregar.splice(indice, 1)
      }
    }



  }
  
  
  

