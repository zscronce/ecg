import { DayOfWeek } from 'src/models/day-of-week';
import { FloatingHoliday, Holiday, StaticHoliday } from 'src/models/holiday';
import { Month } from 'src/models/month';

export const newYearsDay = new StaticHoliday(
	'New Year’s Day',
	Month.January,
	1,
);

export const martinLutherKingJrBirthday = new FloatingHoliday(
	'Birthday of Martin Luther King, Jr.',
	15,
	DayOfWeek.Monday,
	Month.January,
);

export const georgeWashingtonBirthday = new FloatingHoliday(
	'Washington’s Birthday',
	15,
	DayOfWeek.Monday,
	Month.February,
);

export const memorialDay = new FloatingHoliday(
	'Memorial Day',
	25,
	DayOfWeek.Monday,
	Month.May,
);

export const independenceDay = new StaticHoliday(
	'Independence Day',
	Month.July,
	4,
);

export const laborDay = new FloatingHoliday(
	'Labor Day',
	1,
	DayOfWeek.Monday,
	Month.September,
);

export const columbusDay = new FloatingHoliday(
	'Columbus Day',
	8,
	DayOfWeek.Monday,
	Month.October,
);

export const veteransDay = new StaticHoliday(
	'Veteran’s Day',
	Month.November,
	11,
);

export const thanksgivingDay = new FloatingHoliday(
	'Thanksgiving Day',
	22,
	DayOfWeek.Thursday,
	Month.November,
);

export const christmasDay = new StaticHoliday(
	'Christmas Day',
	Month.December,
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
