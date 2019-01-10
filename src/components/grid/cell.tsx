import React from 'react';
import { Checkbox, InputAdornment, MenuItem, Switch, TableCell, TextField } from '@material-ui/core';
import { DatePicker } from 'material-ui-pickers';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';

import { GridColumn } from './index';

type GridCellPropTypes = {
	column: GridColumn,
	datum: any,
	editing: boolean,
	onChange: Function,
};

export class GridCell extends React.Component<GridCellPropTypes> {
	public render = (): JSX.Element => {
		return (
			<TableCell
				numeric={this.props.column.isNumeric}
			>
				{this.props.editing
					? this.renderEditMode()
					: this.renderNonEditMode()
				}
			</TableCell>
		);
	};

	//////////////////////
	// render() helpers //
	//////////////////////

	private renderCellContent = (): JSX.Element => {
		switch (this.props.column.type) {
			case 'checkbox':
				return this.props.datum
					? <CheckBoxIcon/>
					: <CheckBoxOutlineBlankIcon/>;
			case 'switch':
				return this.props.datum
					? <ToggleOnIcon/>
					: <ToggleOffIcon/>;
			default:
				return <>{this.getCellText()}</>;
		}
	};

	private renderEditCheckbox = (): JSX.Element => {
		return (
			<Checkbox checked={this.props.datum} onChange={this.onBooleanChange}/>
		);
	};

	private renderEditSwitch = (): JSX.Element => {
		return (
			<Switch checked={this.props.datum} onChange={this.onBooleanChange}/>
		);
	};

	private renderEditDateMode = (): JSX.Element => {
		return (
			<DatePicker
				value={this.props.datum}
				onChange={this.onDatePickerChange}
				margin="dense"
			/>
		);
	};

	private renderEditSelectMode = (): JSX.Element => {
		let normalizedOptions: Map<string, any> = this.getNormalizedSelectOptions();
		const displayTexts = Array.from(normalizedOptions.keys());

		return (
			<TextField
				select
				value={this.getCellText()}
				onChange={this.onGenericChange}
				variant="outlined"
				margin="dense"
			>
				{displayTexts.map((display: string) =>
					<MenuItem
						key={display}
						value={normalizedOptions.get(display)}
					>
						{display}
					</MenuItem>,
				)}
			</TextField>
		);
	};

	private renderEditCurrencyMode = (): JSX.Element => {
		return (
			<TextField
				type={'number'}
				value={this.props.datum}
				onChange={this.onGenericChange}
				fullWidth
				variant="outlined"
				margin="dense"
				InputProps={{
					startAdornment: <InputAdornment position="start">$</InputAdornment>,
				}}
			/>
		);
	};

	private renderEditTextMode = (): JSX.Element => {
		return (
			<TextField
				type={this.props.column.type}
				value={this.getCellText()}
				onChange={this.onGenericChange}
				fullWidth
				variant="outlined"
				margin="dense"
			/>
		);
	};

	private renderEditMode = (): JSX.Element => {
		switch (this.props.column.type) {
			case 'date':
				return this.renderEditDateMode();
			case 'select':
				return this.renderEditSelectMode();
			case 'checkbox':
				return this.renderEditCheckbox();
			case 'switch':
				return this.renderEditSwitch();
			case 'currency':
				return this.renderEditCurrencyMode();
			default:
				return this.renderEditTextMode();
		}
	};

	private renderNonEditMode = (): JSX.Element => {
		return (
			<React.Fragment>
				{this.renderCellContent()}
			</React.Fragment>
		);
	};

	////////////////////
	// Event Handlers //
	////////////////////

	private onChange = (val: any): void => {
		if (this.props.onChange) {
			this.props.onChange(val);
		}
	};

	private onGenericChange = (event: any): void => {
		this.onChange(event.target.value);
	};

	private onDatePickerChange = (date: Date): void => {
		this.onChange(date);
	};

	private onBooleanChange = (_: object, checked: boolean): void => {
		this.onChange(checked);
	};

	// Helpers //

	private getCellText = (): string => {
		return this.props.column.formatter
			? this.props.column.formatter(this.props.datum)
			: this.props.datum.toString();
	};

	private getNormalizedSelectOptions = (): Map<string, any> => {
		const options = this.props.column.selectOptions;

		if (options instanceof Map) {
			return options;
		} else {
			let normalizedOptions = new Map<string, any>();

			if (options instanceof Array) {
				options.forEach(
					(opt: string) => normalizedOptions.set(opt, opt),
				);
			} else if (options instanceof Object) {
				Object.getOwnPropertyNames(options)
					.forEach(
						(key: string) => normalizedOptions.set(key, options[key]),
					);
			} else {
				const methodName: string = `${GridCell.name}::getNormalizedSelectOptions()`;
				const errorMessage: string = 'this.props.column.selectOptions is not valid';
				throw new Error(`${methodName}: ${errorMessage}`);
			}

			return normalizedOptions;
		}
	};
}
