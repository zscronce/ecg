import { format, setDay } from 'date-fns';

export enum DayOfWeek {
	Sunday = 0,
	Monday = 1,
	Tuesday = 2,
	Wednesday = 3,
	Thursday = 4,
	Friday = 5,
	Saturday = 6,
}

export function getDayOfWeekName(day: DayOfWeek): string {
	let date = new Date();
	date = setDay(date, day);
	return format(date, 'dddd');
}
