import React from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Collapse,
	Drawer,
	Icon,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import PeopleIcon from '@material-ui/icons/People';
// import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// import TodayIcon from '@material-ui/icons/Today';
// import WorkIcon from '@material-ui/icons/Work';
import styled from 'styled-components';

import { theme } from 'src/components/app/mui-theme';

import { menu, MenuEntry } from './menu';

class Chrome extends React.Component {
	public state: {
		drawerOpen: boolean,
		menuIndexOpen?: number,
	};

	public constructor(public props: {
		children?: JSX.Element,
		className?: string,
	}) {
		super(props);

		this.state = {
			drawerOpen: false,
			menuIndexOpen: -1,
		};
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
							ECG
						</Typography>
					</Toolbar>
				</AppBar>
				<div
					className="ecg-layout"
				>
					<Drawer
						variant="permanent"
						open={this.state.drawerOpen}
						className={'drawer ' + (this.state.drawerOpen ? 'open' : 'closed')}
					>
						<List>
							{menu.map((entry: MenuEntry, idx: number) =>
								<ListItem
									key={entry.label}
									component={Link}
									onClick={this.onMenuClick}
									{...{ to: entry.href }}
								>
									<ListItemIcon>
										<Icon>
											{entry.icon}
										</Icon>
									</ListItemIcon>
									<ListItemText>
										{entry.label}
									</ListItemText>
									{entry.sub && entry.sub.length
										?
										<Collapse
											in={this.state.menuIndexOpen === idx}
										>
											<List>
												{entry.sub.map((subEntry: MenuEntry) =>
													<ListItem
														key={subEntry.label}
														component={Link}
														{...{ to: subEntry.href }}
													>
														<ListItemIcon>
															<Icon>
																{subEntry.icon}
															</Icon>
														</ListItemIcon>
														<ListItemText>
															{subEntry.label}
														</ListItemText>
													</ListItem>
												)}
											</List>
										</Collapse>
										:
										null
									}
								</ListItem>
							)}
						</List>
					</Drawer>
					<main>
						{this.props.children}
					</main>
				</div>
			</div>
		);
	}

	private onMenuClick = (e: React.MouseEvent<HTMLElement>): void => {
		console.group();
		console.log('this', this);
		console.log('e', e);
		console.groupEnd();

		this.setState({
			drawerOpen: true,
		});
	}
}

const StyledChrome = styled(Chrome)`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;

	.ecg-bar {
		z-index: ${theme.zIndex.drawer + 1};

		.logo {
			text-decoration: none;
		}
	}

	.drawer {
		overflow-x: hidden;
	}

	.drawer.open {
		width: 240px;
		transition: width ${theme.transitions.duration.enteringScreen}ms;
		transition-timing-function: ${theme.transitions.easing.sharp};
	}

	.drawer.closed {
		width: ${theme.spacing.unit * 9 + 1}px;
		transition: width ${theme.transitions.duration.leavingScreen}ms;
		transition-timing-function: ${theme.transitions.easing.sharp};
	}

	.drawer > * {
		position: static;
		overflow-x: hidden;
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
