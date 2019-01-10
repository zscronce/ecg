import React from 'react';

import { Grid } from 'src/components/grid';
import { GridColumn } from 'src/components/grid/column';
import { monthFormatter } from 'src/components/grid/formatters';
import { StaticHoliday } from 'src/models/holiday';
import { getMonthName, Month } from 'src/models/month';

export class StaticHolidayGrid extends React.Component {
	public static COLUMNS = [
		new GridColumn({
			key: 'description',
			label: 'Description',
		}),
		new GridColumn({
			key: 'month',
			label: 'Month',
			type: 'select',
			formatter: monthFormatter,
			selectOptions: {
				[getMonthName(Month.January)]: Month.January,
				[getMonthName(Month.February)]: Month.February,
				[getMonthName(Month.March)]: Month.March,
				[getMonthName(Month.April)]: Month.April,
				[getMonthName(Month.May)]: Month.May,
				[getMonthName(Month.June)]: Month.June,
				[getMonthName(Month.July)]: Month.July,
				[getMonthName(Month.August)]: Month.August,
				[getMonthName(Month.September)]: Month.September,
				[getMonthName(Month.October)]: Month.October,
				[getMonthName(Month.November)]: Month.November,
				[getMonthName(Month.December)]: Month.December,
			},
		}),
		new GridColumn({
			key: 'dayOfMonth',
			label: 'Date',
			type: 'number',
		}),
	];

	constructor(public props: {
		holidays: StaticHoliday[],
	}) {
		super(props);
	}

	render(): JSX.Element {
		return (
			<Grid
				data={this.props.holidays}
				columns={StaticHolidayGrid.COLUMNS}
			/>
		);
	}
}
