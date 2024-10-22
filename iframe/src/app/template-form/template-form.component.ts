import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiMassiveService} from "../service/api-massive.service";
import {map} from "rxjs";
import {AuthService} from "../service/auth.service";
import {HsmMapperService} from "../service/hsm-mapper.service";

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
    private hsmMapperService: HsmMapperService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.templateForm = this.fb.group({
      templateName: [''],
      message: [''],
      destinations: ['']
    });

    this.loadTemplateOptions();
  }

  loadTemplateOptions() {

    this.apiMassiveService.fetchTemplates(this.authService.accessToken)
      .pipe(
        map(templates => templates.map(template => ({
          value: template.name,
          label: template.name
        })))
      )
      .subscribe((data) => {
        this.templateOptions = data;
        console.log(this.templateOptions);
      });
  }

  send() {
    const inboundDataMapper = this.hsmMapperService.inboundDataMapper(
      this.templateForm.value,
      this.authService.accessToken);

    this.apiMassiveService.sendInboundHsm(inboundDataMapper.inboundData, inboundDataMapper.headers).subscribe(
      {
        next: () => console.log('HSM enviado'),
        error: (error: any) => console.error('Error al enviar HSM', error)
      }
    );
  }
}
