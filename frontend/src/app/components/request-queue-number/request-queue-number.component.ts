import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/tools/material.module';
import { DialogComponent } from './dialog/dialog.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RequestQueueNumberService } from './request-queue-number.service';
import { ToastrService } from 'ngx-toastr';

export interface RequestQueueNumberInterface {
  name: string;
  mobile: string;
  qrCode: string;
}

export interface DialogData {
  _id: string;
}

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.scss'],
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
})
export class RequestQueueNumberComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private requestQueueNumberSvc: RequestQueueNumberService,
    private toastr: ToastrService
  ) {}

  queueForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    qrCode: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    this.requestQueueNumberSvc
      .addQueue(this.queueForm.value as RequestQueueNumberInterface)
      .subscribe(
        (res: any) => {
          this.toastr.success('Queue number added!', 'Success');
          this.dialog.open(DialogComponent, {
            data: {
              _id: res._id as any,
            },
          });
        },
        (err) => {
          this.toastr.error(err.error.message, 'Error');
        }
      );
  }
}
