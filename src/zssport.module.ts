import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match/match.component';
import { RoundComponent } from './round/round.component';
import { TableComponent } from './table/table.component';
import { MatchService }   from './match/match.service';
import { RoundService }   from './round/round.service';
import { TableService }   from './table/table.service';

@NgModule({
  declarations: [
    MatchComponent,
    RoundComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatchComponent,
    RoundComponent,
    TableComponent
  ],
  providers: [
    MatchService,
    RoundService,
    TableService
  ],
})

export class ZssportModule {}