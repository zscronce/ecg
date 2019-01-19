import {format} from 'date-fns';

export enum Month {
	january = 0,
	february = 1,
	march = 2,
	april = 3,
	may = 4,
	june = 5,
	july = 6,
	august = 7,
	september = 8,
	october = 9,
	november = 10,
	december = 11,
}

export function getMonthName(month: Month): string {
	let date = new Date();
	date.setMonth(month);
	return format(date, 'MMMM');
}
