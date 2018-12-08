import React from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import TodayIcon from '@material-ui/icons/Today';
import WorkIcon from '@material-ui/icons/Work';
import styled from 'styled-components';

import { theme } from 'src/components/app/mui-theme';

class Chrome extends React.Component {
	public state: {
		drawerOpen: boolean,
	} = {
		drawerOpen: false,
	};

	public constructor(public props: {
		children?: JSX.Element,
		className?: string,
	}) {
		super(props);

		this.state = { drawerOpen: false };
	}

	public render(): JSX.Element {
		return (
			<section className={this.props.className}>
				<AppBar
					className="ecg-bar"
					position="static"
				>
					<Toolbar>
						<IconButton
							onClick={this.onMenuClick}
						>
							<MenuIcon />
						</IconButton>
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
				<div className="ecg-layout">
					<Drawer
						variant="permanent"
						open={this.state.drawerOpen}
						className={'drawer ' + (this.state.drawerOpen ? 'open' : 'closed')}
					>
						<List>
							<ListItem
								component={Link}
								{...{to: '/employees'}}
							>
								<ListItemIcon>
									<PeopleIcon />
								</ListItemIcon>
								<ListItemText>Employees</ListItemText>
							</ListItem>
							<ListItem
								component={Link}
								{...{to: '/projects'}}
							>
								<ListItemIcon>
									<WorkIcon />
								</ListItemIcon>
								<ListItemText>Projects</ListItemText>
							</ListItem>
							<ListItem
								component={Link}
								{...{to: '/holidays'}}
							>
								<ListItemIcon>
									<TodayIcon />
								</ListItemIcon>
								<ListItemText>Holidays</ListItemText>
							</ListItem>
							<ListItem
								component={Link}
								{...{to: '/contractors'}}
							>
								<ListItemIcon>
									<SupervisedUserCircleIcon />
								</ListItemIcon>
								<ListItemText>Contractors</ListItemText>
							</ListItem>
						</List>
					</Drawer>
					<main>
						{this.props.children}
					</main>
				</div>
			</section>
		);
	}

	private onMenuClick = () => {
		this.setState({
			drawerOpen: !this.state.drawerOpen,
		});
	}
}

// Create some
// const landscapeMedia = '@media (min-width:0px) and (orientation: landscape)';
// const largeScreenMedia = `@media (min-width:${theme.breakpoints.values.sm}px)`;
// const tb: any = theme.mixins.toolbar;
// const spacerStyles = {
// 	default: `height: ${tb.minHeight}px;`,
// 	landscape: `${landscapeMedia} { height: ${tb[landscapeMedia].minHeight}px; }`,
// 	largeScreen: `${largeScreenMedia} { height: ${tb[largeScreenMedia].minHeight}px; }`,
// };

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
