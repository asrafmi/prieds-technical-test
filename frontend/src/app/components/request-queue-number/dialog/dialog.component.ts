import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  standalone: true,
  styleUrls: ['./dialog.component.scss'],
  imports: [MatDialogModule, NgIf, DemoFlexyModule, QRCodeModule],
})
export class DialogComponent implements OnInit {
  value = 'asraf123';
  constructor() {}

  ngOnInit(): void {}
}
