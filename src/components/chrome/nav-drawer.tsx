import React from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Drawer,
	Icon,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tooltip,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styled from 'styled-components';
import classNames from 'classnames';

import { theme } from 'src/components/app/mui-theme';

import { NavGroup, NavLink } from './nav-def';

type NavDrawerProps = {
	dense?: boolean;
	accordion?: boolean;
	className?: boolean;
	definition: NavGroup[];
};

type NavDrawerState = {
	open: boolean;
	openIndeces: number[];
};

class NavDrawer extends React.Component<NavDrawerProps, NavDrawerState> {
	public state: NavDrawerState = {
		open: false,
		openIndeces: [],
	};

	public componentDidUpdate(prevProps: NavDrawerProps): void {
		const prevDef = prevProps.definition;

		if (prevDef !== this.props.definition || prevDef.length !== this.props.definition.length) {
			this.onClickListeners = this.props.definition.map((_: NavGroup, idx: number) =>
				this.onClick.bind(this, idx),
			);
		}
	}

	public render = (): JSX.Element => {
		this.props.definition.forEach((_: NavGroup, idx: number) =>
			this.onClickListeners[idx] = this.onClickListeners[idx] || this.onClick.bind(this, idx),
		);

		return (
			<Drawer
				variant="permanent"
				open={this.state.open}
				className={classNames(this.props.className, {open: this.state.open})}
				PaperProps={{className: 'paper', elevation: 4}}
			>
				<List component="nav" dense={this.props.dense}>
					{this.props.definition.map((group: NavGroup, idx: number) =>
						<>
							<ListItem key={group.label} button onClick={this.onClickListeners[idx]}>
								<ListItemIcon>
									<Icon>
										{group.icon}
									</Icon>
								</ListItemIcon>
								<ListItemText primary={group.label} primaryTypographyProps={{ noWrap: true }}/>
								{group.sub
									? <ExpandMoreIcon className={classNames('expand', {open: this.isOpen(idx)})}/>
									: null
								}
							</ListItem>
							{group.sub && group.sub.length
								? (
									<Collapse in={this.isOpen(idx)}>
										<List dense={this.props.dense}>
											{group.sub.map((link: NavLink) =>
												<ListItem
													key={link.label}
													component={Link}
													className="sublist"
													selected={link.href === window.location.pathname}
													{...{to: link.href}}
												>
													<ListItemIcon>
														<Icon>
															{link.icon}
														</Icon>
													</ListItemIcon>
													<ListItemText primary={link.label} primaryTypographyProps={{noWrap: true}}/>
												</ListItem>,
											)}
										</List>
									</Collapse>
								)
								: null
							}
						</>,
					)}
				</List>
				{this.state.open
					? (
						<Tooltip title="Minimize" placement="left">
							<IconButton onClick={this.closeMenu} className="close">
								<ChevronLeftIcon/>
							</IconButton>
						</Tooltip>
					)
					: null
				}
			</Drawer>
		);
	};

	private onClickListeners: Array<() => void> = [];

	private isOpen = (idx: number): boolean => this.state.openIndeces.indexOf(idx) !== -1;

	private onClick = (idx: number): void => {
		if (this.isOpen(idx)) {
			this.setState({
				openIndeces: this.state.openIndeces.filter(i => i !== idx),
			});
		} else if (this.props.accordion) {
			this.setState({
				open: true,
				openIndeces: [idx],
			});
		} else {
			this.setState({
				open: true,
				openIndeces: this.state.openIndeces.concat(idx),
			});
		}
	};

	private closeMenu = (): void => this.setState({open: false, openIndeces: []});
}

const styledNavDrawer = styled(NavDrawer)`
	width: ${theme.spacing.unit * 9 + 1}px;
	transition-property: width;
	transition-duration: ${theme.transitions.duration.leavingScreen}ms;
	transition-timing-function: ${theme.transitions.easing.sharp};

	&.open {
		width: 240px;
		transition-property: width;
		transition-duration: ${theme.transitions.duration.enteringScreen}ms;
		transition-timing-function: ${theme.transitions.easing.sharp};
	}

	.paper {
		position: relative;
		overflow-x: hidden;
		height: 100%;
	}

	.expand {
		transition: ${theme.transitions.duration.standard}ms ${theme.transitions.easing.sharp};
	}

	.expand.open {
		transform: rotate(180deg);
	}

	.sublist {
		padding-left: ${theme.spacing.unit * 4}px;
	}

	.nowrap {
		white-space: nowrap;
	}

	.close {
		position: absolute;
		bottom: ${theme.spacing.unit}px;
		right: ${theme.spacing.unit}px;
	}
`;

export {
	styledNavDrawer as NavDrawer,
};
