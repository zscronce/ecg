import {Card, createStyles, withStyles} from '@material-ui/core';
import React from 'react';

import {LoginComponent} from 'src/components/login';

export type LoginPageProps = {
	classes: {
		root: string,
	},
};

class LoginPage extends React.Component<LoginPageProps> {
	public render(): JSX.Element {
		return (
			<Card className={this.props.classes.root}>
				<LoginComponent/>
			</Card>
		);
	}
}

const styledLoginPage = withStyles(createStyles({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
}))(LoginPage);

export {
	styledLoginPage as LoginPage,
};
