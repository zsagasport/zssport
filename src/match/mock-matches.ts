import { Match } from './match.model';

const
    ARSENAL: string = 'Arsenal',
    BOURNEMOUTH: string = 'Bournemouth',
    BURNLEY: string = 'Burnley FC',
    CHELSEA: string = 'Chelsea',
    CRYSTAL: string = 'Crystal Palace',
    LEICESTER: string = 'Leicester City',
    HULL: string = 'Hull City',
    SWANSEA: string = 'Swansea City',
    MCITY: string = 'Manchester City',
    MIDDLESBROUGH: string = 'Middlesbrough',
    MUNITED: string = 'Man United',
    EVERTON: string = 'Everton',
    LIVERPOOL: string = 'Liverpool FC',
    TOTTENHAM: string = 'Tottenham',
    SOUTHAMPTON: string = 'Southampton',
    STOKE: string = 'Stoke City',
    SUNDERLAND: string = 'Sunderland',
    WATFORD: string = 'Watford',
    WESTBROM: string = 'West Brom',
    WESTHAM: string = 'West Ham';

export const MATCHES: Match[] = [
    {
        id: 201617010701,
        homeClub: EVERTON,
        homeGoals: 1,
        awayClub: CRYSTAL,
        awayGoals: 1,
        finished: true,
        date: '2016/09/30',
        round: 7
    },
    {
        id: 201617010702,
        homeClub: SWANSEA,
        homeGoals: 1,
        awayClub: LIVERPOOL,
        awayGoals: 2,
        finished: true,
        date: '2016/10/01',
        round: 7
    },
    {
        id: 201617010703,
        homeClub: WESTHAM,
        homeGoals: 1,
        awayClub: MIDDLESBROUGH,
        awayGoals: 1,
        date: '2016/10/01',
        finished: true,
        round: 7
    },
     {
        id: 201617010704,
        homeClub: HULL,
        homeGoals: 0,
        awayClub: CHELSEA,
        awayGoals: 2,
        date: '2016/10/01',
        finished: true,
        round: 7
    },
    {
        id: 201617010705,
        homeClub: SUNDERLAND,
        homeGoals: 1,
        awayClub: WESTBROM,
        awayGoals: 1,
        date: '2016/10/01',
        finished: true,
        round: 7
    },
    {
        id: 201617010706,
        homeClub: WATFORD,
        homeGoals: 2,
        awayClub: BOURNEMOUTH,
        awayGoals: 2,
        date: '2016/10/01',
        finished: true,
        round: 7
    },
    {
        id: 201617010707,
        homeClub: MUNITED,
        homeGoals: 1,
        awayClub: STOKE,
        awayGoals: 1,
        date: '2016/10/02',
        finished: true,
        round: 7
    },
    {
        id: 201617010708,
        homeClub: LEICESTER,
        homeGoals: 0,
        awayClub: SOUTHAMPTON,
        awayGoals: 0,
        date: '2016/10/02',
        finished: true,
        round: 7
    },
    {
        id: 201617010709,
        homeClub: TOTTENHAM,
        homeGoals: 2,
        awayClub: MCITY,
        awayGoals: 0,
        date: '2016/10/02',
        finished: true,
        round: 7
    },
    {
        id: 201617010710,
        homeClub: BURNLEY,
        homeGoals: 0,
        awayClub: ARSENAL,
        awayGoals: 1,
        date: '2016/10/02',
        finished: true,
        round: 7
    },
    {
        id: 201617010801,
        homeClub: CHELSEA,
        homeGoals: 3,
        awayClub: LEICESTER,
        awayGoals: 0,
        finished: true,
        date: '2016/10/15',
        round: 8
    },
    {
        id: 201617010802,
        homeClub: ARSENAL,
        homeGoals: 3,
        awayClub: SWANSEA,
        awayGoals: 2,
        finished: true,
        date: '2016/10/15',
        round: 8
    },
    {
        id: 201617010803,
        homeClub: WESTBROM,
        homeGoals: 1,
        awayClub: TOTTENHAM,
        awayGoals: 1,
        date: '2016/10/15',
        finished: true,
        round: 8
    },
     {
        id: 201617010804,
        homeClub: STOKE,
        homeGoals: 2,
        awayClub: SUNDERLAND,
        awayGoals: 0,
        date: '2016/10/15',
        finished: true,
        round: 8
    },
    {
        id: 201617010805,
        homeClub: BOURNEMOUTH,
        homeGoals: 6,
        awayClub: HULL,
        awayGoals: 1,
        date: '2016/10/15',
        finished: true,
        round: 8
    },
    {
        id: 201617010806,
        homeClub: MCITY,
        homeGoals: 1,
        awayClub: EVERTON,
        awayGoals: 1,
        date: '2016/10/15',
        finished: true,
        round: 8
    },
    {
        id: 201617010807,
        homeClub: CRYSTAL,
        homeGoals: 0,
        awayClub: WESTHAM,
        awayGoals: 1,
        date: '2016/10/15',
        finished: true,
        round: 8
    },
    {
        id: 201617010808,
        homeClub: MIDDLESBROUGH,
        homeGoals: 0,
        awayClub: WATFORD,
        awayGoals: 1,
        date: '2016/10/16',
        finished: true,
        round: 8
    },
    {
        id: 201617010809,
        homeClub: SOUTHAMPTON,
        homeGoals: 3,
        awayClub: BURNLEY,
        awayGoals: 1,
        date: '2016/10/16',
        finished: true,
        round: 8
    },
    {
        id: 201617010810,
        homeClub: LIVERPOOL,
        homeGoals: 0,
        awayClub: MUNITED,
        awayGoals: 0,
        date: '2016/10/17',
        finished: true,
        round: 8
    },
    {
        id: 201617010901,
        homeClub: BOURNEMOUTH,
        homeGoals: 0,
        awayClub: TOTTENHAM,
        awayGoals: 0,
        finished: true,
        date: '2016/10/22',
        round: 9
    },
    {
        id: 201617010902,
        homeClub: ARSENAL,
        homeGoals: 0,
        awayClub: MIDDLESBROUGH,
        awayGoals: 0,
        finished: true,
        date: '2016/10/22',
        round: 9
    },
    {
        id: 201617010903,
        homeClub: LEICESTER,
        homeGoals: 3,
        awayClub: CRYSTAL,
        awayGoals: 1,
        date: '2016/10/22',
        finished: true,
        round: 9
    },
     {
        id: 201617010904,
        homeClub: WESTHAM,
        homeGoals: 1,
        awayClub: SUNDERLAND,
        awayGoals: 0,
        date: '2016/10/22',
        finished: true,
        round: 9
    },
    {
        id: 201617010905,
        homeClub: HULL,
        homeGoals: 0,
        awayClub: STOKE,
        awayGoals: 2,
        date: '2016/10/22',
        finished: true,
        round: 9
    },
    {
        id: 201617010906,
        homeClub: SWANSEA,
        homeGoals: 0,
        awayClub: WATFORD,
        awayGoals: 0,
        date: '2016/10/22',
        finished: true,
        round: 9
    },
    {
        id: 201617010907,
        homeClub: BURNLEY,
        homeGoals: 2,
        awayClub: EVERTON,
        awayGoals: 1,
        date: '2016/10/22',
        finished: true,
        round: 9
    },
    {
        id: 201617010908,
        homeClub: LIVERPOOL,
        homeGoals: 2,
        awayClub: WESTBROM,
        awayGoals: 1,
        date: '2016/10/22',
        finished: true,
        round: 9
    },
    {
        id: 201617010909,
        homeClub: MCITY,
        homeGoals: 1,
        awayClub: SOUTHAMPTON,
        awayGoals: 1,
        date: '2016/10/23',
        finished: true,
        round: 9
    },
    {
        id: 201617010910,
        homeClub: CHELSEA,
        homeGoals: 4,
        awayClub: MUNITED,
        awayGoals: 0,
        date: '2016/10/23',
        finished: true,
        round: 9
    },
    {
        id: 201617011001,
        homeClub: SUNDERLAND,
        homeGoals: 1,
        awayClub: ARSENAL,
        awayGoals: 4,
        finished: true,
        date: '2016/10/29',
        round: 10
    },
    {
        id: 201617011002,
        homeClub: WATFORD,
        homeGoals: 1,
        awayClub: HULL,
        awayGoals: 0,
        finished: true,
        date: '2016/10/29',
        round: 10
    },
    {
        id: 201617011003,
        homeClub: WESTBROM,
        homeGoals: 0,
        awayClub: MCITY,
        awayGoals: 4,
        date: '2016/10/29',
        finished: true,
        round: 10
    },
     {
        id: 201617011004,
        homeClub: MUNITED,
        homeGoals: 0,
        awayClub: BURNLEY,
        awayGoals: 0,
        date: '2016/10/29',
        finished: true,
        round: 10
    },
    {
        id: 201617011005,
        homeClub: TOTTENHAM,
        homeGoals: 1,
        awayClub: LEICESTER,
        awayGoals: 1,
        date: '2016/10/29',
        finished: true,
        round: 10
    },
    {
        id: 201617011006,
        homeClub: MIDDLESBROUGH,
        homeGoals: 2,
        awayClub: BOURNEMOUTH,
        awayGoals: 0,
        date: '2016/10/29',
        finished: true,
        round: 10
    },
    {
        id: 201617011007,
        homeClub: CRYSTAL,
        homeGoals: 2,
        awayClub: LIVERPOOL,
        awayGoals: 4,
        date: '2016/10/29',
        finished: true,
        round: 10
    },
    {
        id: 201617011008,
        homeClub: EVERTON,
        homeGoals: 2,
        awayClub: WESTHAM,
        awayGoals: 0,
        date: '2016/10/30',
        finished: true,
        round: 10
    },
    {
        id: 201617011009,
        homeClub: SOUTHAMPTON,
        homeGoals: 0,
        awayClub: CHELSEA,
        awayGoals: 2,
        date: '2016/10/30',
        finished: true,
        round: 10
    },
    {
        id: 201617011010,
        homeClub: STOKE,
        homeGoals: 3,
        awayClub: SWANSEA,
        awayGoals: 1,
        date: '2016/10/31',
        finished: true,
        round: 10
    },

    {
        id: 201617011101,
        homeClub: MCITY,
        homeGoals: 1,
        awayClub: MIDDLESBROUGH,
        awayGoals: 1,
        finished: true,
        date: '2016/11/05',
        round: 11
    },
    {
        id: 201617011102,
        homeClub: WESTHAM,
        homeGoals: 1,
        awayClub: STOKE,
        awayGoals: 1,
        finished: true,
        date: '2016/11/05',
        round: 11
    },
    {
        id: 201617011103,
        homeClub: BURNLEY,
        homeGoals: 2,
        awayClub: CRYSTAL,
        awayGoals: 2,
        date: '2016/11/05',
        finished: true,
        round: 11
    },
     {
        id: 201617011104,
        homeClub: BOURNEMOUTH,
        homeGoals: 1,
        awayClub: SUNDERLAND,
        awayGoals: 2,
        date: '2016/11/05',
        finished: true,
        round: 11
    },
    {
        id: 201617011105,
        homeClub: CHELSEA,
        homeGoals: 5,
        awayClub: EVERTON,
        awayGoals: 0,
        date: '2016/11/05',
        finished: true,
        round: 11
    },
    {
        id: 201617011106,
        homeClub: ARSENAL,
        homeGoals: 1,
        awayClub: TOTTENHAM,
        awayGoals: 1,
        date: '2016/11/06',
        finished: true,
        round: 11
    },
    {
        id: 201617011107,
        homeClub: HULL,
        homeGoals: 2,
        awayClub: SOUTHAMPTON,
        awayGoals: 1,
        date: '2016/11/06',
        finished: true,
        round: 11
    },
    {
        id: 201617011108,
        homeClub: LIVERPOOL,
        homeGoals: 6,
        awayClub: WATFORD,
        awayGoals: 1,
        date: '2016/11/06',
        finished: true,
        round: 11
    },
    {
        id: 201617011109,
        homeClub: SWANSEA,
        homeGoals: 1,
        awayClub: MUNITED,
        awayGoals: 3,
        date: '2016/11/06',
        finished: true,
        round: 11
    },
    {
        id: 201617011110,
        homeClub: LEICESTER,
        homeGoals: 1,
        awayClub: WESTBROM,
        awayGoals: 2,
        date: '2016/11/06',
        finished: true,
        round: 11
    },

    {
        id: 201617011201,
        homeClub: MUNITED,
        homeGoals: null,
        awayClub: ARSENAL,
        awayGoals: null,
        finished: false,
        date: '2016/11/19',
        round: 12
    },
    {
        id: 201617011202,
        homeClub: SUNDERLAND,
        homeGoals: null,
        awayClub: HULL,
        awayGoals: null,
        finished: false,
        date: '2016/11/19',
        round: 12
    },
    {
        id: 201617011203,
        homeClub: WATFORD,
        homeGoals: null,
        awayClub: LEICESTER,
        awayGoals: null,
        date: '2016/11/19',
        finished: false,
        round: 12
    },
     {
        id: 201617011204,
        homeClub: CRYSTAL,
        homeGoals: null,
        awayClub: MCITY,
        awayGoals: null,
        date: '2016/11/19',
        finished: false,
        round: 12
    },
    {
        id: 201617011205,
        homeClub: EVERTON,
        homeGoals: null,
        awayClub: SWANSEA,
        awayGoals: null,
        date: '2016/11/19',
        finished: false,
        round: 12
    },
    {
        id: 20161701206,
        homeClub: STOKE,
        homeGoals: null,
        awayClub: BOURNEMOUTH,
        awayGoals: null,
        date: '2016/11/19',
        finished: false,
        round: 12
    },
    {
        id: 201617011207,
        homeClub: SOUTHAMPTON,
        homeGoals: null,
        awayClub: LIVERPOOL,
        awayGoals: null,
        date: '2016/11/19',
        finished: false,
        round: 12
    },
    {
        id: 201617011208,
        homeClub: TOTTENHAM,
        homeGoals: null,
        awayClub: WESTHAM,
        awayGoals: null,
        date: '2016/11/19',
        finished: false,
        round: 12
    },
    {
        id: 201617011209,
        homeClub: MIDDLESBROUGH,
        homeGoals: null,
        awayClub: CHELSEA,
        awayGoals: null,
        date: '2016/11/20',
        finished: false,
        round: 12
    },
    {
        id: 201617011210,
        homeClub: WESTBROM,
        homeGoals: null,
        awayClub: BURNLEY,
        awayGoals: null,
        date: '2016/11/21',
        finished: false,
        round: 12
    }
];