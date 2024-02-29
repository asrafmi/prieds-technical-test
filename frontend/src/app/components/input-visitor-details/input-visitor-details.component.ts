import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { InputVisitorDetailsService } from './input-visitor-details.service';

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
    private inputVisitorDetailsSvc: InputVisitorDetailsService
  ) {}

  visitorForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    gender: new FormControl(''),
    nik: new FormControl(''),
    birthdate: new FormControl(''),
    address: new FormControl(''),
    diseaseHistory: new FormControl(''),
    alergy: new FormControl(''),
    complaint: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    this.inputVisitorDetailsSvc
      .addVisitor(this.visitorForm.value as InputVisitorDetailsInterface)
      .subscribe((res) => {
        this._router.navigate(['/visitor-list']);
      });
  }
}
