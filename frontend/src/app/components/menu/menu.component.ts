import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/tools/material.module';
import { QueueListService } from './menu.service';

export interface QueueInterface {
  name: string;
  mobile: string;
  createdAt: string;
  queueNumber: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [MaterialModule],
})
export class MenuComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'registerTimestamp',
    'queueNumber',
  ];
  queueList: QueueInterface[] = [];

  constructor(
    private router: Router,
    private QueueListService: QueueListService
  ) {}

  parseRegisterDate(date: string): string {
    return new Date(date).toLocaleString().replace(',', '').replace(' ', ' - ');
  }
  ngOnInit(): void {
    this.QueueListService.getQueueList().subscribe((queues) => {
      this.queueList = queues.map((queue, index) => ({
        ...queue,
        id: index + 1,
      }));
    });
  }

  changePage(path: string) {
    this.router.navigate(['/' + path]);
  }
}
