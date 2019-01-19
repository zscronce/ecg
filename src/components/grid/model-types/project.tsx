import React from 'react';

import {ExpenseType} from 'src/models/primitive/expense-type';
import {Grid} from 'src/components/grid';
import {GridColumn} from 'src/components/grid/column';
import {Project} from 'src/models/project';
import {ProjectType} from 'src/models/primitive/project-type';

export class ProjectGrid extends React.Component {
	public static COLUMNS: GridColumn[] = [
		new GridColumn({
			key: 'id',
			label: 'Project',
		}),
		new GridColumn({
			key: 'type',
			label: 'Type',
			type: 'select',
			selectOptions: [
				ProjectType.project,
				ProjectType.pto,
				ProjectType.holiday,
				ProjectType['401K'],
			],
		}),
		new GridColumn({
			key: 'expenseType',
			label: 'Expense Type',
			type: 'select',
			selectOptions: [
				ExpenseType.dl,
				ExpenseType.fringe,
				ExpenseType['G&A'],
				ExpenseType.oh,
			],
		}),
	];

	public constructor(public props: {
		projects: Project[],
	}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<Grid
				columns={ProjectGrid.COLUMNS}
				data={this.props.projects}
			/>
		);
	}
}
