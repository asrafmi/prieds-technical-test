import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { DialogComponent } from './dialog/dialog.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RequestQueueNumberService } from './request-queue-number.service';

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
  imports: [DemoFlexyModule, ReactiveFormsModule],
})
export class RequestQueueNumberComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private requestQueueNumberSvc: RequestQueueNumberService
  ) {}

  queueForm = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    qrCode: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    const obj = {
      ...this.queueForm.value,
      qrCode: `${this.queueForm.value.name}-${this.queueForm.value.mobile}`,
    };
    this.requestQueueNumberSvc
      .addQueue(obj as RequestQueueNumberInterface)
      .subscribe((res: any) => {
        this.dialog.open(DialogComponent, {
          data: {
            _id: res._id as any,
          },
        });
      });
  }
}
