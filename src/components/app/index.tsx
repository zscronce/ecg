import React from 'react';
import { CssBaseline, createStyles, MuiThemeProvider, withStyles } from '@material-ui/core';

import { theme } from './mui-theme';

/**
 * @description renders react providers around its children
 */
class App extends React.Component<{
	children: JSX.Element,
	classes: {
		root: string,
	},
}> {
	render(): JSX.Element {
		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline/>
				<div className={this.props.classes.root}>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

let styledApp = withStyles(createStyles({
	root: {
		height: '100vh',
		width: '100vw',
		position: 'fixed',
	},
}))(App);

export {
	styledApp as App,
};
