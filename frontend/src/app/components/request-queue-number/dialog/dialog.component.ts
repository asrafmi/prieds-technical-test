import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { DialogService } from './dialog.service';
import { DialogData } from '../request-queue-number.component';

export interface DialogDetailData {
  queueNumber: string;
  qrCode: string;
  createdAt: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  standalone: true,
  styleUrls: ['./dialog.component.scss'],
  imports: [MatDialogModule, NgIf, DemoFlexyModule, QRCodeModule],
})
export class DialogComponent implements OnInit {
  dialogData = {} as DialogDetailData;
  constructor(
    private dialogSvc: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  parseRegisterDate(date: string): string {
    return new Date(date).toLocaleString().replace(',', '').replace(' ', ' - ');
  }

  ngOnInit(): void {
    this.dialogSvc.showQr(this.data._id).subscribe((res) => {
      this.dialogData = res as DialogDetailData;
    });
  }
}
