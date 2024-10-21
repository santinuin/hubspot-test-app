import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HsmService} from "../service/hsm.service";
import {map} from "rxjs";

@Component({
  selector: 'app-template-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formulario!: FormGroup;
  templateOptions: { value: string, label: string }[] = [];

  constructor(private fb: FormBuilder, private hsmService: HsmService) {
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      user: [''],
      password: [''],
      template: [''],
      message: [''],
      destinataries: ['']
    });

    this.loadTemplateOptions();
  }

loadTemplateOptions() {
  this.hsmService.fetchTemplates()
    .pipe(
      map(templates => templates.map(template => ({
        value: template.id,
        label: template.name
      })))
    )
    .subscribe((data) => {
      this.templateOptions = data;
      console.log(this.templateOptions);
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
