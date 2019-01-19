import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

export class PrimitiveList extends React.Component {
	public props: {
		primitive: any,
	};

	render(): JSX.Element {
		return (
			<List>
				{Object.keys(this.props.primitive).map((value: string): JSX.Element => (
					<ListItem
						tabIndex={0}
						key={value}
					>
						<ListItemText
							primary={value}
							secondary={this.props.primitive[value]}
						/>
					</ListItem>
				))}
			</List>
		);
	}
}
