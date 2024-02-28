import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [DemoFlexyModule],
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  changePage(path: string) {
    this.router.navigate(['/' + path]);
  }

}
