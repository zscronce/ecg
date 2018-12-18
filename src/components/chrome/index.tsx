import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
} from '@material-ui/core';
import styled from 'styled-components';

import { theme } from 'src/components/app/mui-theme';

import { NavDrawer } from './nav-drawer';

class Chrome extends React.Component {
	public constructor(public props: {
		children?: JSX.Element,
		className?: string,
	}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<div
				className={this.props.className}
			>
				<AppBar
					className="ecg-bar"
					position="static"
				>
					<Toolbar>
						<Typography
							component="a"
							variant="h3"
							color="inherit"
							className="logo"
							noWrap
							{...{href: '/'}}
						>
							ECG<span className="thin">INC</span>
						</Typography>
					</Toolbar>
				</AppBar>
				<div
					className="ecg-layout"
				>
					<NavDrawer
						dense
					/>
					<main>
						{this.props.children}
					</main>
				</div>
			</div>
		);
	}
}

const StyledChrome = styled(Chrome)`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	
	.thin {
		font-weight: 200;
	}

	.ecg-bar {
		z-index: ${theme.zIndex.drawer + 1};
	}

	.menu > * {
		position: static;
		overflow-x: hidden;
	}

	.logo {
		text-decoration: none;
	}

	.ecg-layout {
		flex-shrink: 0;
		flex-grow: 1;
		display: flex;
		flex-direction: row;
	}
`;

export {
	StyledChrome as Chrome,
};
