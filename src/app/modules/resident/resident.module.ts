import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentRoutingModule } from './resident-routing.module';
import { RegisterResidentComponent } from './pages/register-resident/register-resident.component';
import { ManagementComponent } from './pages/management/management.component';
import { ResidentMenuComponent } from './components/resident-menu/resident-menu.component';
import { ResidentComponent } from './resident.component';
import { ReportComponent } from './pages/report/report.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { MessageComponent } from './pages/message/message.component';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [
    RegisterResidentComponent,
    ManagementComponent,
    ResidentMenuComponent,
    ResidentComponent,
    ReportComponent,
    ReserveComponent,
    NotificationComponent,
    MessageComponent
  ],
  imports: [CommonModule, ResidentRoutingModule, MainModule]
})
export class ResidentModule {}
