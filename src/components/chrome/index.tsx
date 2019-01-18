import React from 'react';
import { AppBar, createStyles, Toolbar, Typography, withStyles } from '@material-ui/core';

import { NavDrawer } from './nav-drawer';
import { navDef } from './nav-def';

import { theme } from 'src/components/app/mui-theme';

type ChromeProps = {
	children?: JSX.Element,
	classes: {
		root: string,
		thin: string,
		ecgBar: string,
		logo: string,
		layout: string,
	},
};

class Chrome extends React.Component<ChromeProps> {
	public render(): JSX.Element {
		const cl = this.props.classes;

		return (
			<div className={cl.root}>
				<AppBar className={cl.ecgBar} position="static">
					<Toolbar>
						<Typography
							component="a"
							variant="h3"
							color="inherit"
							className={cl.logo}
							noWrap
							{...{ href: '/' }}
						>
							ECG<span className={cl.thin}>INC</span>
						</Typography>
					</Toolbar>
				</AppBar>
				<div className={cl.layout}>
					<NavDrawer dense definition={navDef}/>
					<main>
						{this.props.children}
					</main>
				</div>
			</div>
		);
	}
}

const styledChrome = withStyles(createStyles({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	thin: {
		fontWeight: 200,
	},
	ecgBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	logo: {
		textDecoration: 'none',
	},
	layout: {
		display: 'flex',
		flexDirection: 'row',
		flexShrink: 0,
		flexGrow: 1,
	},
}))(Chrome);

export {
	styledChrome as Chrome,
};
