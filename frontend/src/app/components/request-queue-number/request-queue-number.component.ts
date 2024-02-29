import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.scss'],
  standalone: true,
  imports: [DemoFlexyModule],
})
export class RequestQueueNumberComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  handleClick(event: MouseEvent) {
    event.preventDefault()
    this.dialog.open(DialogComponent);
  }
}
