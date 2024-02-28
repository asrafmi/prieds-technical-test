import { Component, OnInit } from '@angular/core';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.scss'],
  standalone: true,
  imports: [DemoFlexyModule],
})
export class InputVisitorDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
