import { Component, OnInit } from '@angular/core';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

export interface PeriodicElement {
  id: number;
  name: string;
  birthDate: string;
  registerTimestamp: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Deep Javiya',
    birthDate: '22-02-2022',
    registerTimestamp: '22-02-2023 - 15.00',
  },
  {
    id: 2,
    name: 'Nirav Joshi',
    birthDate: '22-02-2022',
    registerTimestamp: '22-02-2023 - 15.00',
  },
  {
    id: 3,
    name: 'Sunil Joshi',
    birthDate: '22-02-2022',
    registerTimestamp: '22-02-2023 - 15.00',
  },
  {
    id: 4,
    name: 'Maruti Makwana',
    birthDate: '22-02-2022',
    registerTimestamp: '22-02-2023 - 15.00',
  },
];

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.scss'],
  standalone: true,
  imports: [DemoFlexyModule],
})
export class VisitorListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'birthDate', 'registerTimestamp'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
