import React from 'react';

import { ExpenseType } from 'src/models/expense-type';
import { Grid } from 'src/components/grid';
import { GridColumn } from 'src/components/grid/column';
import { Project } from 'src/models/project';
import { ProjectType } from 'src/models/project-type';

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
				ProjectType.PROJECT,
				ProjectType.PTO,
				ProjectType.HOLIDAY,
				ProjectType.FOUR01K,
			],
		}),
		new GridColumn({
			key: 'expenseType',
			label: 'Expense Type',
			type: 'select',
			selectOptions: [
				ExpenseType.DL,
				ExpenseType.FRINGE,
				ExpenseType.GNA,
				ExpenseType.OH,
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
