import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { EtbRoutingModule } from './etb-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CqubeLibraryModule } from 'cqube-library';

import { EtbComponent } from './etb.component';
import { EtbProgramComponent } from './pages/etb-program/etb-program.component';
import { EtbCoverageComponent } from './pages/etb-coverage/etb-coverage.component';
import { QRCoverageAcrossStatesComponent } from './pages/qr-coverage-across-states/qr-coverage-across-states.component';
import { TotalPlaysPerCapitaComponent } from './pages/total-plays-per-capita/total-plays-per-capita.component';
import { TotalLearningSessionsComponent } from './pages/total-learning-sessions/total-learning-sessions.component';

@NgModule({
  declarations: [
    EtbComponent,
    EtbProgramComponent,
    EtbCoverageComponent,
    QRCoverageAcrossStatesComponent,
    TotalPlaysPerCapitaComponent,
    TotalLearningSessionsComponent
  ],
  imports: [
    CommonModule,
    EtbRoutingModule,
    SharedModule,
    MatTabsModule,
    CqubeLibraryModule
  ]
})
export class EtbModule { }
