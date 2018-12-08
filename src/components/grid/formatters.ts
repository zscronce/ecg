import { DayOfWeek, getDayOfWeekName } from 'src/models/day-of-week';
import { getMonthName, Month } from 'src/models/month';

const currencyNumberFormat = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
});

export function dateFormatter(date: any): string {
	if (date instanceof Date) {
		return date.toLocaleDateString();
	} else {
		return '';
	}
}

export function currencyFormatter(amount: any): string {
	if (typeof amount === 'number') {
		return currencyNumberFormat.format(amount as number);
	} else {
		return '';
	}
}

export function dayOfWeekFormatter(dayOfWeek: any): string {
	if (typeof dayOfWeek === 'number') {
		return getDayOfWeekName(dayOfWeek as DayOfWeek);
	} else {
		return '';
	}
}

export function monthFormatter(month: any): string {
	if (typeof month === 'number') {
		return getMonthName(month as Month);
	} else {
		return '';
	}
}
