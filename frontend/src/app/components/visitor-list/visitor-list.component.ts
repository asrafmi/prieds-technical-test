import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/tools/material.module';
import { VisitorListService } from './visitor-list.service';

export interface VisitorListInterface {
  id: number;
  name: string;
  birthDate: string;
  registerTimestamp: string;
}

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.scss'],
  standalone: true,
  imports: [MaterialModule],
})
export class VisitorListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'birthDate', 'registerTimestamp'];
  visitorList: VisitorListInterface[] = [];

  constructor(private visitorListSvc: VisitorListService) {}

  parseRegisterDate(date: string): string {
    return new Date(date).toLocaleString().replace(',', '').replace(' ', ' - ');
  }

  parseBirthDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }
  ngOnInit(): void {
    this.visitorListSvc.getVisitorList().subscribe((visitors) => {
      this.visitorList = visitors.map((visitor, index) => ({
        ...visitor,
        id: index + 1,
      }));
    });
  }
}
