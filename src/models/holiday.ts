import {addDays, getDay, isSaturday, isSunday, subDays} from 'date-fns';

import {DayOfWeek} from './day-of-week';
import {Month} from './month';

export type DayOfMonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
	| 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
	| 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
	| 31;

export interface Holiday {
	description: string;
	dateIn(year: number): Date;
	observedIn(year: number): Date;
}

export class StaticHoliday implements Holiday {
	constructor(
		public description: string,
		public month: Month,
		public dayOfMonth: DayOfMonth,
	) {
	}

	dateIn(year: number): Date {
		return new Date(year, this.month, this.dayOfMonth);
	}

	observedIn(year: number): Date {
		let date = this.dateIn(year);

		if (isSaturday(date)) {
			date = subDays(date, 1);
		} else if (isSunday(date)) {
			date = addDays(date, 1);
		}

		return date;
	}
}

export class FloatingHoliday implements Holiday {
	constructor(
		public description: string,
		public rangeStart: DayOfMonth,
		public day: DayOfWeek,
		public month: Month,
	) {
	}

	dateIn(year: number): Date {
		let date = new Date(year, this.month, this.rangeStart);

		let dayDiff = this.day - getDay(date);
		if (dayDiff < 0) {
			dayDiff += 7;
		}
		date = addDays(date, dayDiff);

		return date;
	}

	observedIn(year: number): Date {
		return this.dateIn(year);
	}
}
