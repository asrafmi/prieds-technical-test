import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { InputVisitorDetailsService } from './input-visitor-details.service';
import { ToastrService } from 'ngx-toastr';

export interface InputVisitorDetailsInterface {
  name: string;
  email: string;
  mobile: string;
  gender: string;
  nik: string;
  birthdate: string;
  address: string;
  diseaseHistory: string;
  alergy: string;
  complaint: string;
}

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    NgIf,
    ReactiveFormsModule,
  ],
})
export class InputVisitorDetailsComponent implements OnInit {
  checkedGender = true;
  checkedAlergy: number = 1;

  constructor(
    private _router: Router,
    private inputVisitorDetailsSvc: InputVisitorDetailsService,
    private toastr: ToastrService
  ) {}

  visitorForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+62-?)|0)?[0-9]{10,}$'),
    ]),
    gender: new FormControl('', Validators.required),
    nik: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    diseaseHistory: new FormControl(''),
    alergy: new FormControl(''),
    complaint: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    this.inputVisitorDetailsSvc
      .addVisitor(this.visitorForm.value as InputVisitorDetailsInterface)
      .subscribe(
        (res) => {
          this.toastr.success('Visitor added successfully', 'Success');
          setTimeout(() => {
            this._router.navigate(['/visitor-list']);
          }, 2000);
        },
        (err) => {
          if (err.status === 409) {
            this.toastr.error('Email already exist', 'Error');
          }
        }
      );
  }
}
