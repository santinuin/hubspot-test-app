import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiMassiveService} from "../service/api-massive.service";
import {map} from "rxjs";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  templateForm!: FormGroup;
  templateOptions: { value: string, label: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private apiMassiveService: ApiMassiveService,
    private authService: AuthService,
    ) {
  }

  ngOnInit(): void {
    this.templateForm = this.fb.group({
      template: [''],
      message: [''],
      destinataries: ['']
    });

    this.loadTemplateOptions();
  }

loadTemplateOptions() {
  this.apiMassiveService.fetchTemplates()
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

  send() {
    console.log(this.templateForm.value);
    console.log(this.authService.accessToken);
    /*    const datos = this.formulario.value;
        this.http.post('https://tu-servidor.com/api/submit', datos)
          .subscribe(response => {
            console.log('Datos enviados correctamente');
          }, error => {
            console.error('Error al enviar los datos:', error);
          });*/
  }
}
