import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, NgIf, DemoFlexyModule],
})
export class DialogComponent implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
  }
}
