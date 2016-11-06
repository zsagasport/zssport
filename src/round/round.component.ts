import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../match/match.model';
import { MatchService } from '../match/match.service';
import { Round } from './round.model';
import { RoundService } from './round.service';

@Component({
    selector: 'zssport-round',
    template: `
        <article class="round" *ngIf="round">
            <h3>{{title}}</h3>
            <zssport-match [match]="match" *ngFor="let match of matches"></zssport-match>
        </article>
    `,
    styles: [
        `
            :host {
                display: block;
                font-weight: normal;
                margin: 5px;
            }
        `
    ]
})

export class RoundComponent implements OnInit {
    title: string;

    @Input() roundId: number;

    round: Round;

    matches: Match[];

    constructor (private roundService: RoundService, private matchService: MatchService) {
    }

    getRound(): void {
        this.roundService.getRound(
            this.roundId
        ).then (
            round => {
                if (round) {
                    this.round = round;
                    this.title = 'Round ' + this.round.num;

                    this.matchService.getMatchesByRound(
                        this.round.num
                    ).then(
                        matches => this.matches = matches
                    );
                }
            }
        );
    }

    ngOnInit(): void {
        this.getRound();
    }
}