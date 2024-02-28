import { Component, OnInit } from '@angular/core';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.scss'],
  standalone: true,
  imports: [DemoFlexyModule],
})
export class RequestQueueNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
