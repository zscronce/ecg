import React from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Drawer,
	Icon,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
	}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<Drawer
				variant="permanent"
				open={this.state.open}
				className={this.state.open ? 'open' : ''}
			>
				<List
					component="nav"
					dense={this.props.dense}
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
									primaryTypographyProps={{noWrap: true}}
								/>
								{group.sub.length
									?
									<ExpandMoreIcon
										className={'expand' + (this.state.openIndeces.has(idx) ? ' open' : '')}
									/>
									:
									null
								}
							</ListItem>
							{group.sub.length
								?
								<Collapse
									in={this.state.openIndeces.has(idx)}
								>
									<List
										dense={this.props.dense}
									>
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
												<ListItemText
													primary={link.label}
													primaryTypographyProps={{noWrap: true}}
												/>
											</ListItem>
										)}
									</List>
								</Collapse>
								:
								null
							}
						</>
					)}
				</List>
			</Drawer>
		);
	}

	private onClick = (idx: number): void => {
		if (this.props.accordion) {
			this.state.openIndeces.clear();
		}

		if (this.state.openIndeces.has(idx)) {
			this.state.openIndeces.delete(idx);
		} else {
			this.state.openIndeces.add(idx);
		}

		this.setState({
			open: true,
			openIndeces: this.state.openIndeces,
		});
	}
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
`;

export {
	StyledNavDrawer as NavDrawer,
};
