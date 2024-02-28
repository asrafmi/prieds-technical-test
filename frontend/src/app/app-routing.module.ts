import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { MenuComponent } from './components/menu/menu.component';
import { RequestQueueNumberComponent } from './components/request-queue-number/request-queue-number.component';
import { InputVisitorDetailsComponent } from './components/input-visitor-details/input-visitor-details.component';
import { VisitorListComponent } from './components/visitor-list/visitor-list.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: MenuComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'request-queue-number', component: RequestQueueNumberComponent },
      {
        path: 'input-visitor-details',
        component: InputVisitorDetailsComponent,
      },
      { path: 'visitor-list', component: VisitorListComponent },
    ],
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
