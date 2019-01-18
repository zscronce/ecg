import React from 'react';
import { Table, TableBody, TableHead, TableFooter, TableRow, TableCell } from '@material-ui/core'

type GridProps<T> = {
	list: T[];
	classes: {
		table: string;
		head: string;
		body: string;
		footer: string;
		row: string;
		cell: string;
		textInput: string;
	};
};

export default class Grid<T> extends React.Component<GridProps<T>> {
	constructor(props:  GridProps<T>) {
		super(props);
	}

	public render = (): JSX.Element => (
		<Table className={this.props.classes.table}>
			<TableHead className={this.props.classes.head}>
				<TableRow className={this.props.classes.row}>
					<TableCell className={this.props.classes.cell}/>
					<TableCell className={this.props.classes.cell}>Foo</TableCell>
					<TableCell className={this.props.classes.cell}>Bar</TableCell>
					<TableCell className={this.props.classes.cell}>Baz</TableCell>
				</TableRow>
			</TableHead>
			<TableBody className={this.props.classes.body}>
				{this.props.list.map((item: T, i: number) =>
					<TableRow className={this.props.classes.row} key={i}>
						<TableCell className={this.props.classes.cell} variant="head">1</TableCell>
						<TableCell className={this.props.classes.cell}>
							<input type="text" className={this.props.classes.textInput}/>
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
