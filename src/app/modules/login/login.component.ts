import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from './../../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  checked = false;
  hide = true;
  form: FormGroup;
  submitted = false;
  constructor(
    private userservice: UserServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      if (
        this.form.value.username == 'merchant' &&
        this.form.value.password == 'tudip123'
      ) {
        this.router.navigate(['/']);
      }
      // if (this.form.valid)
      //   this.userservice
      //     .loginCheck(this.form.value.username, this.form.value.password)
      //     .subscribe((response) => {
      //       console.log(response);
      //     });
    }
  }
}
