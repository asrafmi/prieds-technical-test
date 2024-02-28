import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { DemoFlexyModule } from '../demo-flexy-module';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { InputVisitorDetailsComponent } from './input-visitor-details/input-visitor-details.component';
import { RequestQueueNumberComponent } from './request-queue-number/request-queue-number.component';

@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    VisitorListComponent,
    InputVisitorDetailsComponent,
    RequestQueueNumberComponent,
  ],
  exports: [
    VisitorListComponent,
    InputVisitorDetailsComponent,
    RequestQueueNumberComponent,
  ],
})
export class ComponentsModule {}
