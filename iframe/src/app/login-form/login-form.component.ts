import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../service/login.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe((response) => {
      this.authService.accessToken = response.access_token;
      console.log('Token: ', this.authService.accessToken);
    });
  }
}
