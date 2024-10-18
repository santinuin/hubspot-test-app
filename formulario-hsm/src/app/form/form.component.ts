import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [''],
      email: [''],
      telefono: ['']
    });
  }

  enviarDatos() {
    console.log(this.formulario.value);
/*    const datos = this.formulario.value;
    this.http.post('https://tu-servidor.com/api/submit', datos)
      .subscribe(response => {
        console.log('Datos enviados correctamente');
      }, error => {
        console.error('Error al enviar los datos:', error);
      });*/
  }
}
