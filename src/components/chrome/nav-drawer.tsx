import React from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	createStyles,
	Drawer,
	Icon,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tooltip,
	withStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import classNames from 'classnames';

import { NavGroup, NavLink } from './nav-def';

import { theme } from 'src/components/app/mui-theme';

type NavDrawerProps = {
	dense?: boolean;
	accordion?: boolean;
	classes: {
		root: string,
		expanded: string,
		paper: string,
		expander: string,
		sublist: string,
		nowrap: string,
		toggle: string,
		flip: string,
	},
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

	public componentWillMount(): void {
		this.cacheListeners();
	}

	public componentDidUpdate(prevProps: NavDrawerProps): void {
		if (prevProps.definition.length !== this.props.definition.length) {
			this.cacheListeners();
		}
	}

	public render = (): JSX.Element => {
		const cl = this.props.classes;

		return (
			<Drawer
				variant="permanent"
				open={this.state.open}
				className={classNames(cl.root, {[cl.expanded]: this.state.open})}
				PaperProps={{className: cl.paper, elevation: 4}}
			>
				<List component="nav" dense={this.props.dense}>
					{this.props.definition.map((group: NavGroup, idx: number) =>
						<React.Fragment key={group.label}>
							<ListItem button onClick={this.onClickListeners[idx]}>
								<ListItemIcon>
									<Icon>
										{group.icon}
									</Icon>
								</ListItemIcon>
								<ListItemText primary={group.label} primaryTypographyProps={{ noWrap: true }}/>
								{group.sub
									? <ExpandMoreIcon className={classNames(cl.expander, {[cl.flip]: this.isOpen(idx)})}/>
									: null
								}
							</ListItem>
							{group.sub && group.sub.length
								? (
									<Collapse key={`${group.label}-sub`} in={this.state.open && this.isOpen(idx)}>
										<List dense={this.props.dense}>
											{group.sub.map((link: NavLink) =>
												<ListItem
													key={link.label}
													component={Link}
													className={cl.sublist}
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
						</React.Fragment>,
					)}
				</List>
				<Tooltip title={this.state.open ? 'Minimize' : 'Open'} placement="top-start">
					<IconButton onClick={this.toggleMenu} className={classNames(cl.toggle, {[cl.flip]: this.state.open})}>
						<ChevronRightIcon/>
					</IconButton>
				</Tooltip>
			</Drawer>
		);
	};

	private onClickListeners: Array<() => void> = [];

	private isOpen = (idx: number): boolean => {
		return this.state.openIndeces.indexOf(idx) !== -1;
	};

	private cacheListeners() {
		this.onClickListeners = this.props.definition.map((_: NavGroup, idx: number) =>
			this.onClick.bind(this, idx),
		);
	}

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

	private toggleMenu = (): void => {
		this.setState({
			open: !this.state.open,
		});
	};
}

const styledNavDrawer = withStyles(createStyles({
	root: {
		width: 9 * theme.spacing.unit + 1,
		transitionProperty: 'width',
		transitionDuration: `${theme.transitions.duration.leavingScreen}ms`,
		transitionTimingFunction: theme.transitions.easing.sharp,
	},
	expanded: {
		width: 240,
	},
	paper: {
		position: 'relative',
		overflowX: 'hidden',
		height: '100%',
	},
	expander: {
		transition: `${theme.transitions.duration.standard}ms ${theme.transitions.easing.sharp}`,
	},
	sublist: {
		paddingLeft: 4 * theme.spacing.unit,
	},
	nowrap: {
		whiteSpace: 'nowrap',
	},
	toggle: {
		position: 'absolute',
		bottom: theme.spacing.unit,
		right: theme.spacing.unit,
		transitionDuration: `${theme.transitions.duration.standard}`,
		transitionTimingFunction: theme.transitions.easing.sharp,
	},
	flip: {
		transform: 'rotate(180deg)',
	},
}))(NavDrawer);

export {
	styledNavDrawer as NavDrawer,
};
