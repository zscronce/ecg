import {format, setDay} from 'date-fns';

export enum DayOfWeek {
	sunday = 0,
	monday = 1,
	tuesday = 2,
	wednesday = 3,
	thursday = 4,
	friday = 5,
	saturday = 6,
}

export function getDayOfWeekName(day: DayOfWeek): string {
	let date = new Date();
	date = setDay(date, day);
	return format(date, 'dddd');
}
