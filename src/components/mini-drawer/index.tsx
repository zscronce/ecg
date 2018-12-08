// import React, { ReactNode } from 'react';

// import { Divider, Drawer } from '@material-ui/core';
// import styled from 'styled-components';

// import { theme } from 'src/components/app/mui-theme';

// class MiniDrawer extends React.Component {
// 	public state: {
// 		open: boolean,
// 	} = {
// 		open: false,
// 	};

// 	public constructor(public props: {
// 		children?: ReactNode,
// 		className?: string,
// 	}) {
// 		super(props);
// 	}

// 	public render(): JSX.Element {
// 		const drawerState = this.state.open
// 			? 'open'
// 			: 'closed';

// 		const className = `${this.props.className} ${drawerState}`;

// 		return (
// 			<Drawer
// 				variant="permanent"
// 				className={className}
// 				PaperProps={{className}}
// 			>
// 				<Divider className="spacer" />
// 				{this.props.children}
// 			</Drawer>
// 		);
// 	}
// }

// const StyledMiniDrawer = styled(MiniDrawer)`
// 	overflow-x: hidden;

// 	&.open {
// 		width: ${theme.spacing.unit * 30}px;
// 		transition: width ${theme.transitions.duration.enteringScreen}ms;
// 		transition-timing-function: ${theme.transitions.easing.sharp};
// 	}
// 	&.closed {
// 		width: ${theme.spacing.unit * 9 + 1}px;
// 		transition: width ${theme.transitions.duration.leavingScreen}ms;
// 		transition-timing-function: ${theme.transitions.easing.sharp}
// 	}

// 	.spacer {
// 		${spacerStyles.default}
// 		${spacerStyles.landscape}
// 		${spacerStyles.largeScreen}
// 	}
// `;

// export {
// 	StyledMiniDrawer as MiniDrawer,
// };
