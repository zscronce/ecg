import React from 'react';

import {
	newYearsDay,
	independenceDay,
	veteransDay,
	christmasDay,
} from 'src/debug/example-holidays';
import { StaticHoliday } from 'src/models/holiday';
import { StaticHolidayGrid } from 'src/components/grid/model-types/holiday';

export class HolidayGridPage extends React.Component {
	holidays: StaticHoliday[] = [newYearsDay, independenceDay, veteransDay, christmasDay];

	constructor(public props: {}) {
		super(props);
	}

	render(): JSX.Element {
		return (
			<StaticHolidayGrid
				holidays={this.holidays}
			/>
		);
	}
}
