import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../match/match.model';
import { MatchService } from '../match/match.service';
import { TableService } from './table.service';
import { ClubPosition } from './club-position.model';

const TABLE_COLUMN_NAMES: Object = {
    position: 'Pos',
    lastPosition: 'Last Pos',
    club: 'Club',
    played: 'Played',
    won: 'Won',
    drawn: 'Drawn',
    lost: 'Lost',
    goalFor: 'Goal For',
    goalAgainst: 'Goal Against',
    points: 'Points'
};

const TABLE_COLUMN_CLASS_NAMES: string[] = [
    'position',
    'lastPosition',
    'club',
    'played',
    'won',
    'drawn',
    'lost',
    'goalFor',
    'goalAgainst',
    'points'
];

const DEFAULT_COLUMN_CONFIG: Object =  {
	position: true,
	lastPosition: true,
	club: true,
	played: true,
	won: true,
	drawn: true,
	lost: true,
	goalFor: true,
	goalAgainst: true,
	points: true
};

@Component({
    selector: 'zssport-table',
    template:
        `
			<div class="zssport-table" *ngIf="summarizedRounds">
				<table>
					<thead>
						<tr>
							<th class="col-">
							<span class="table-column"></span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="row-{{i}}" *ngFor="let round of summarizedRounds; let i = index;">
							<td class="" *ngFor="let item of classNames; let j = index">
								{{round[item]}}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		`,
	styles: [
		`
			:host table {
				width: 100%;
			}

			:host table td {
				padding: 5px 0;
			}
		`
	]
})

export class TableComponent implements OnInit {
	classNames = TABLE_COLUMN_CLASS_NAMES;
    columnConfig = DEFAULT_COLUMN_CONFIG;
    matches: Array<Match> = [];
    summarizedRounds: Array<ClubPosition>;
	@Input() selectedRound: number = 0;
    @Input() showRange: boolean = true;

    constructor (private tableService: TableService) {}

    ngOnInit() {
		this.getSummarizedRounds();
	}

	getSummarizedRounds(): void {
        this.tableService.getTable()
		.then (
            tables => {
                this.summarizedRounds = tables;
            }
        );
    };

    addPoints(club, goalFor, goalAgainst) {
		club.goalAgainst += goalAgainst;
		club.goalFor += goalFor;
		club.played += 1;

		if (goalFor > goalAgainst) {
			club.points += 3;
			club.won += 1;
		}
		else if (goalFor === goalAgainst) {
			club.points += 1;
			club.drawn += 1;
		}
		else {
			club.lost += 1;
		}
	}

    changeTableContents(event) {
		let rangeElement = event.delegateTarget;

		this.selectedRound = rangeElement.value;
	}

    cloneClubRound(clubRound) {
		var object = {};

		Object.keys(clubRound).forEach(key => {
			let object2 = {};
			let club = clubRound[key];

			Object.keys(club).forEach(key2 => {
				object2[key2] = club[key2];
			});

			object[key] = object2;
		});

		return object;
	}

    getMatches(values) {
		var matches: Array<Match> = [];

		for(let i = 0; i < values.length; i++) {
			matches.push(values[i]); 
		}

	 	return matches;
	}

    makeClubRounds(matches) {
		var clubRounds = {};

		for (let i = 0; i < matches.length; i++) {
			let match = matches[i];

			let club1Name = match.homeClub.title;
			let club2Name = match.awayClub.title;
			let round = match.round;

			let clubRound = clubRounds[round] || (clubRounds[round - 1] ? this.cloneClubRound(clubRounds[round - 1]) : {});

			let club1 = clubRound[club1Name];

			if (!club1) {
				club1 = new ClubPosition();

				club1.club = club1Name;
			}

			this.addPoints(club1, match.getHomeGoals(), match.getAwayGoals());

			clubRound[club1Name] = club1;

			let club2 = clubRound[club2Name];

			if (!club2) {
				club2 = new ClubPosition();

				club2.club = club2Name;
			}

			this.addPoints(club2, match.getAwayGoals(), match.getHomeGoals());

			clubRound[club2Name] = club2;

			clubRounds[round] = clubRound;
		}

		return clubRounds;
	}

    processMatches() {
		var clubRounds = this.makeClubRounds(this.matches),
			rounds = [],
			clubPositions = {};


		Object.keys(clubRounds).forEach(key => {
			let clubRound = clubRounds[key];
			let round = [];

			Object.keys(clubRound).forEach(club => {
				round.push(clubRound[club]);
			});

			round.sort((club1, club2) => {
				var pointsDifference = club1.points - club2.points;

				if (pointsDifference !== 0) {
					return pointsDifference;
				}
				else {
					let club1GoalDifference = club1.goalFor - club1.goalAgainst;
					let club2GoalDifference = club2.goalFor - club2.goalAgainst;

					if (club1GoalDifference !== club2GoalDifference) {
						return club1GoalDifference - club2GoalDifference;
					}
					else {
						return club1.goalFor - club2.goalFor;
					}
				}
			});

			round.reverse();

			round.forEach((club, index) => {
				let clubName = club.club,
					lastPosition = clubPositions[clubName] || 0;

				club.position = clubPositions[clubName] = index + 1;
				club.lastPosition = lastPosition;
			});

			rounds.push(round);
		})

	}
}
