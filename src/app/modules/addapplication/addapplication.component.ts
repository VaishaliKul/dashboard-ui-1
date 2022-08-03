import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addapplication',
  templateUrl: './addapplication.component.html',
  styleUrls: ['./addapplication.component.css'],
})
export class AddapplicationComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
