import React, {ChangeEvent} from 'react';
import {Select, Table, TableBody, TableCell, TableFooter, TableHead, TableRow} from '@material-ui/core';

import {Model} from 'src/models/model';
import {GridColumn} from '../column';

type GridRowProps<T extends Model> = {
	columns: GridColumn[];
	datum: T;
	classes: {
		td: string;
		input: string;
	};
};

type HTMLGridInput = HTMLInputElement | HTMLSelectElement;

class GridRow<T extends Model> extends React.Component<GridRowProps<T>> {
	public render = (): JSX.Element => (
		<TableRow>
			{this.props.columns.map((col: GridColumn) => (
				<TableCell key={col.key} className={this.props.classes.td}>
					<input className={this.props.classes.input} onChange={e => this.handleChange(e, col)}/>
				</TableCell>
			))}
		</TableRow>
	);

	public handleChange = (e: ChangeEvent<HTMLGridInput>, col: GridColumn): void => {
		this.props.datum[col.key] = GridRow.parseValue(e.target, col);
	};

	private static parseValue = (e: HTMLGridInput, col: GridColumn): string | Date | number | boolean => {
		switch (col.type) {
			case 'currency':
			case 'number':
				return (e as HTMLInputElement).valueAsNumber;
			case 'date':
				return (e as HTMLInputElement).valueAsDate;
			case 'checkbox':
			case 'switch':
				return (e as HTMLInputElement).checked;
			default:
				return e.value;
		}
	};

	private renderTextInput = (): JSX.Element => (
		<input className={this.props.classes.input} onChange={e => this.handleChange(e, col)}/>
	);

	private renderSelectInput = (col: GridColumn): JSX.Element => (
		<Select onChange={e => this.handleChange(e, col)}>
			{col.selectOptions.map(opt => (
				<option key={opt.value} value={opt.value}>{opt.label}</option>
			))}
		</Select>
	);
}

type GridProps<T extends Model> = {
	columns: GridColumn[];
	list: T[];
	classes: {
		table: string;
	};
};

class Grid<T extends Model> extends React.Component<GridProps<T>> {
	public render = (): JSX.Element => (
		<Table>
			<TableHead>
				<TableRow>
					{this.props.columns.map((col: GridColumn) => (
						<TableCell variant="head">
							{col.label}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{this.props.list.map((model: Model) => (
					<GridRow columns={this.props.columns} datum={model}/>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={this.props.columns.length}>
						{JSON.stringify(this.props.list)}
					</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}

type GridCellProps<T extends Model> = {
	column: GridColumn;
	value: any;
};
