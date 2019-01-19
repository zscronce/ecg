import React from 'react';
import {Table, TableBody, TableCell, TableFooter, TableHead, TableRow} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

type SheetProps = {
	classes: {
		th: string,
	},
};

class Sheet extends React.Component<SheetProps> {
	render = (): JSX.Element => (
		<Table>
			<TableHead className={this.props.classes.th}>
				<TableRow>
					<TableCell variant="head">n + 1</TableCell>
					<TableCell variant="head">n + 3</TableCell>
					<TableCell variant="head">n + 4</TableCell>
					<TableCell variant="head">n + 5</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>
						<TextField variant="outlined" margin="dense" type="text"/>
					</TableCell>
					<TableCell>
						<TextField variant="outlined" margin="dense" type="number"/>
					</TableCell>
					<TableCell>
						<TextField variant="outlined" margin="dense" type="date"/>
					</TableCell>
					<TableCell>
						<TextField variant="outlined" select>
							<option value={1}>One</option>
							<option value={2}>Two</option>
							<option value={3}>Three</option>
						</TextField>
					</TableCell>
					<TableCell>
						<TextField variant="outlined"/>
					</TableCell>
				</TableRow>
				{[1, 2, 3, 4, 5].map((x: number) => (
					<TableRow>
						{[1, 2, 3, 4, 5].map((n: number) => (
							<TableCell numeric>{5 * x + n}</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableCell colSpan={5}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</TableCell>
			</TableFooter>
		</Table>
	);
}

const styledSheet = withStyles(createStyles({
	th: {
		textAlign: 'center',
	},
}))(Sheet);

export {
	styledSheet as Sheet,
};
