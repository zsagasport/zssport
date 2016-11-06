import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match/match.component';
import { RoundComponent } from './round/round.component';
import { MatchService }   from './match/match.service';
import { RoundService }   from './round/round.service';

@NgModule({
  declarations: [
    MatchComponent,
    RoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatchComponent,
    RoundComponent
  ],
  providers: [
    MatchService,
    RoundService
  ],
})

export class ZssportModule {}