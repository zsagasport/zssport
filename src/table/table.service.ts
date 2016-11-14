import { Injectable } from '@angular/core';
import { ClubPosition } from './club-position.model';
import { CLUB_POSITIONS } from './mock-table';

@Injectable()
export class TableService {
    getTable(): Promise<ClubPosition[]> {
        return Promise.resolve(CLUB_POSITIONS);
    }
}