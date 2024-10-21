import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  accessToken!: string;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe((response) => {
      this.accessToken = response.access_token;
      console.log('Token: ', this.accessToken);
    });
  }
}
