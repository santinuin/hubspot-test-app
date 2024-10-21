import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {ApiMassiveService} from "../service/api-massive.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiMassiveService: ApiMassiveService,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.apiMassiveService.login(this.loginForm.value).subscribe((response) => {
      this.authService.accessToken = response.access_token;
      console.log('Token: ', this.authService.accessToken);
      this.router.navigate(['/template-form']);
    });
  }
}
