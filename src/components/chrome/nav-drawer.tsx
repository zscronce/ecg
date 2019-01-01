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

import { theme } from 'src/components/app/mui-theme';

import { menuDef, NavGroup, NavLink } from './nav-def';

class NavDrawer extends React.Component {
	public state: {
		open: boolean,
		openIndeces: Set<number>,
	};

	public constructor(public props: {
		dense?: boolean,
		accordion?: boolean,
		className?: string,
	}) {
		super(props);

		this.state = {
			open: false,
			openIndeces: new Set<number>(),
		};
	}

	public render(): JSX.Element {
		const { className, dense } = this.props;
		const { open, openIndeces } = this.state;

		const getDrawerClass = () => (className || '') + (this.state.open
			? ' open'
			: '');
		const getMenuToggleClass = (idx: number) => 'expand' + (this.state.openIndeces.has(idx)
			? ' open'
			: '');

		return (
			<Drawer
				variant="permanent"
				open={open}
				className={getDrawerClass()}
				PaperProps={{ className: 'paper', elevation: 4 }}
			>
				<List
					component="nav"
					dense={dense}
				>
					{menuDef.map((group: NavGroup, idx: number) =>
						<>
							<ListItem
								key={group.label}
								button
								onClick={() => this.onClick(idx)}
							>
								<ListItemIcon>
									<Icon>
										{group.icon}
									</Icon>
								</ListItemIcon>
								<ListItemText
									primary={group.label}
									primaryTypographyProps={{ noWrap: true }}
								/>
								{group.sub.length
									?
									<ExpandMoreIcon
										className={getMenuToggleClass(idx)}
									/>
									:
									null
								}
							</ListItem>
							{group.sub.length
								?
								<Collapse
									in={openIndeces.has(idx)}
								>
									<List
										dense={dense}
									>
										{group.sub.map((link: NavLink) =>
											<ListItem
												key={link.label}
												component={Link}
												className="sublist"
												selected={link.href === window.location.pathname}
												{...{ to: link.href }}
											>
												<ListItemIcon>
													<Icon>
														{link.icon}
													</Icon>
												</ListItemIcon>
												<ListItemText
													primary={link.label}
													primaryTypographyProps={{ noWrap: true }}
												/>
											</ListItem>,
										)}
									</List>
								</Collapse>
								:
								null
							}
						</>,
					)}
				</List>
				{this.state.open
					?
					<Tooltip
						title="Minimize"
						placement="left"
					>
						<IconButton
							onClick={this.closeMenu}
							className="close"
						>
							<ChevronLeftIcon/>
						</IconButton>
					</Tooltip>
					:
					null
				}
			</Drawer>
		);
	}

	private onClick = (idx: number): void => {
		if (this.state.openIndeces.has(idx)) {
			this.state.openIndeces.delete(idx);
		} else {
			if (this.props.accordion) {
				this.state.openIndeces.clear();
			}
			this.state.openIndeces.add(idx);
		}

		this.setState({
			open: true,
			openIndeces: this.state.openIndeces,
		});
	};

	private closeMenu = (): void => this.setState({ open: false, openIndeces: new Set<number>() });
}

const StyledNavDrawer = styled(NavDrawer)`
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
	StyledNavDrawer as NavDrawer,
};
