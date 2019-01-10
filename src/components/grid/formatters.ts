import { DayOfWeek, getDayOfWeekName } from 'src/models/day-of-week';
import { getMonthName, Month } from 'src/models/month';
import { Primitive } from '../../models/primitive';

const currencyFormat = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
});

export const dateFormatter = (date: Date): string => {
	if (date instanceof Date) {
		return date.toLocaleDateString();
	} else {
		return '';
	}
};

export const currencyFormatter = (amount: number): string => {
	if (typeof amount === 'number') {
		return currencyFormat.format(amount as number);
	} else {
		return '';
	}
};

export const dayOfWeekFormatter = (dayOfWeek: DayOfWeek): string => {
	if (typeof dayOfWeek === 'number') {
		return getDayOfWeekName(dayOfWeek as DayOfWeek);
	} else {
		return '';
	}
};

export const monthFormatter = (month: Month): string => {
	if (typeof month === 'number') {
		return getMonthName(month as Month);
	} else {
		return '';
	}
};

export const primitiveFormatter = (p: Primitive): string => p.name;
