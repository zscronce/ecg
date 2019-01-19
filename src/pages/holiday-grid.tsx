import React from 'react';

import {christmasDay, independenceDay, newYearsDay, veteransDay} from 'src/debug/example-holidays';
import {StaticHoliday} from 'src/models/holiday';
import {StaticHolidayGrid} from 'src/components/grid/model-types/holiday';

export class HolidayGridPage extends React.Component {
	public holidays: StaticHoliday[] = [newYearsDay, independenceDay, veteransDay, christmasDay];

	constructor(public props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<StaticHolidayGrid
				holidays={this.holidays}
			/>
		);
	}
}
