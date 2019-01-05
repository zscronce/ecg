import React from 'react';
import { IconButton, TableCell, TableRow, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import { GridColumn } from './column';
import { GridCell } from './cell';

import { cloneClassObject } from 'src/util/clone-class-object';

export class GridRow<T> extends React.Component {
	public state: {
		editing?: T,
		edits?: Array<{
			propName: string,
			value: any,
		}>,
	};

	constructor(public props: {
		columns: GridColumn[],
		data: T,
		onDelete?: (data: T) => void,
		onCommit?: (data: T) => void,
	}) {
		super(props);

		this.state = {
			editing: null,
			edits: [],
		};
	}

	public render(): JSX.Element {
		return (
			<TableRow>
				<TableCell variant="head">
					<Typography noWrap>
						{this.state.editing
							?
							<>
								<IconButton onClick={this.onClickSave}>
									<SaveIcon/>
								</IconButton>
								<IconButton onClick={this.onClickCancel}>
									<CancelIcon/>
								</IconButton>
							</>
							:
							<>
								<IconButton onClick={this.onClickEdit}>
									<EditIcon/>
								</IconButton>
								<IconButton onClick={this.onClickDelete}>
									<DeleteIcon/>
								</IconButton>
							</>
						}
					</Typography>
				</TableCell>
				{this.props.columns.map((col: GridColumn) =>
					<GridCell
						key={col.key}
						column={col}
						editing={this.state.editing && col.editable}
						datum={this.state.editing && col.editable
							? this.state.editing[col.key]
							: this.props.data[col.key]}
						onChange={(val: any) => this.onInputChange(col.key, val)}
					/>,
				)}
			</TableRow>
		);
	}

	private readonly onClickEdit = (): void => {
		this.setState({
			editing: cloneClassObject(this.props.data as T & { constructor: { new(): T } }),
			edits: [],
		});
	};

	private readonly onClickDelete = (): void => {
		if (this.props.onDelete) {
			this.props.onDelete(this.props.data);
		}
	};

	private readonly onClickSave = (): void => {
		this.state.edits.forEach(
			(edit: { propName: string, value: any }) => this.props.data[edit.propName] = edit.value,
		);

		this.setState({
			editing: null,
			edits: null,
		});
	};

	private readonly onClickCancel = (): void => {
		this.setState({
			editing: null,
			edits: null,
		});
	};

	private readonly onInputChange = (propName: string, value: any): void => {
		const editing = this.state.editing;
		editing[propName] = value;

		const edits = this.state.edits;
		edits.push({ propName, value });

		// Make sure react sees the above changes
		this.setState({ editing, edits });
	};
}
