import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @Input()
  size: number;

  checked = false;
  hide = true;
  form: FormGroup;
  submitted = false;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {
    console.log(this.size);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', Validators.required],
    });
    console.log(this.size);
  }
  get f() {
    return this.form.controls;
  }

  //form submission
  onSubmit() {
    console.log(this.form);
    this.submitted = true;
  }

  //Dialog box
  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponentDialog);

    dialogRef.afterClosed().subscribe((result) => {
      this.checked = result;
    });
  }
}

@Component({
  selector: 'register-component-dialog',
  templateUrl: './signup.component-dialog.html',
})
export class RegisterComponentDialog {}
