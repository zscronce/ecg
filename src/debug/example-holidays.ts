import {DayOfWeek} from 'src/models/day-of-week';
import {FloatingHoliday, Holiday, StaticHoliday} from 'src/models/holiday';
import {Month} from 'src/models/month';

export const newYearsDay = new StaticHoliday(
	'New Year’s Day',
	Month.january,
	1,
);

export const martinLutherKingJrBirthday = new FloatingHoliday(
	'Birthday of Martin Luther King, Jr.',
	15,
	DayOfWeek.monday,
	Month.january,
);

export const georgeWashingtonBirthday = new FloatingHoliday(
	'Washington’s Birthday',
	15,
	DayOfWeek.monday,
	Month.february,
);

export const memorialDay = new FloatingHoliday(
	'Memorial Day',
	25,
	DayOfWeek.monday,
	Month.may,
);

export const independenceDay = new StaticHoliday(
	'Independence Day',
	Month.july,
	4,
);

export const laborDay = new FloatingHoliday(
	'Labor Day',
	1,
	DayOfWeek.monday,
	Month.september,
);

export const columbusDay = new FloatingHoliday(
	'Columbus Day',
	8,
	DayOfWeek.monday,
	Month.october,
);

export const veteransDay = new StaticHoliday(
	'Veteran’s Day',
	Month.november,
	11,
);

export const thanksgivingDay = new FloatingHoliday(
	'Thanksgiving Day',
	22,
	DayOfWeek.thursday,
	Month.november,
);

export const christmasDay = new StaticHoliday(
	'Christmas Day',
	Month.december,
	25,
);

export const federalHolidays: Holiday[] = [
	newYearsDay,
	martinLutherKingJrBirthday,
	georgeWashingtonBirthday,
	memorialDay,
	independenceDay,
	laborDay,
	columbusDay,
	veteransDay,
	thanksgivingDay,
	christmasDay,
];
