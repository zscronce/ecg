import { format } from 'date-fns';

export enum Month {
	January = 0,
	February = 1,
	March = 2,
	April = 3,
	May = 4,
	June = 5,
	July = 6,
	August = 7,
	September = 8,
	October = 9,
	November = 10,
	December = 11,
}

export function getMonthName(month: Month): string {
	let date = new Date();
	date.setMonth(month);
	return format(date, 'MMMM');
}
