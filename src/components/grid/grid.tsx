import React from 'react';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import styled from 'styled-components';

import { GridColumn } from './index';
import { GridRow } from './row';

class Grid extends React.Component {
	constructor(public props: {
		data: object[],
		columns: GridColumn[],
		addIcon?: React.ComponentClass,
		onAdd?: () => void,
		onChange?: (changed: object) => void,
		onDelete?: (deleted: object) => void,
	}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<Table
				padding="dense"
			>
				<TableHead>
					<TableRow>
						<TableCell
							variant="head"
						>
							<IconButton
								onClick={this.props.onAdd}
							>
								{this.props.addIcon
									? React.createElement(this.props.addIcon)
									: <AddCircleIcon/>}
							</IconButton>
						</TableCell>
						{this.props.columns.map((col: GridColumn) =>
							<TableCell
								key={col.key}
								variant="head"
								numeric={col.isNumeric}
							>
								{col.label}
							</TableCell>,
						)}
					</TableRow>
				</TableHead>
				<TableBody>
					{this.props.data.map((datum: any, idx: number) =>
						<GridRow
							key={idx}
							data={datum}
							columns={this.props.columns}
							onCommit={this.props.onChange}
							onDelete={this.props.onDelete}
						/>,
					)}
				</TableBody>
			</Table>
		);
	}
}

const StyledGrid = styled(Grid)`
	tbody tr td:first-child {
		text-align: right;
		white-space: nowrap;
		width: 1%;
	}
`;

export {
	StyledGrid as Grid,
};
