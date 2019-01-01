import React from 'react';

import { Contractor } from 'src/models/contractor';
import { currencyFormatter, dateFormatter, Grid, GridColumn } from 'src/components/grid';
import { LaborTypeEnum } from 'src/models/primitive/labor-type';

export class ContractorGrid extends React.Component {
	public static COLUMNS: GridColumn[] = [
		new GridColumn({
			key: 'id',
			label: 'Contractor',
		}),
		new GridColumn({
			key: 'hireDate',
			label: 'Hire Date',
			type: 'date',
			formatter: dateFormatter,
		}),
		new GridColumn({
			key: 'laborType',
			label: 'Labor Type',
			type: 'select',
			selectOptions: [
				LaborTypeEnum.Direct,
				LaborTypeEnum.Indirect,
			],
		}),
		new GridColumn({
			key: 'hourlyRate',
			label: 'Hourly Rate',
			type: 'currency',
			formatter: currencyFormatter,
		}),
	];

	public constructor(public props: {
		contractors: Contractor[],
	}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<Grid
				columns={ContractorGrid.COLUMNS}
				data={this.props.contractors}
			/>
		);
	}
}
