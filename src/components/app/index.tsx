import React, { ReactNode } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import styled from 'styled-components';

import { DatePickerUtils } from './date-picker-utils';
import { theme } from './mui-theme';

/**
 * @description renders react providers around its children
 */
class App extends React.Component {
	constructor(public props: {
		className?: string,
		children?: ReactNode,
	}) {
		super(props);
	}

	render(): JSX.Element {
		console.log((this.props as any).classes);
		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<MuiPickersUtilsProvider utils={DatePickerUtils}>
					<div className={this.props.className}>
						{this.props.children}
					</div>
				</MuiPickersUtilsProvider>
			</MuiThemeProvider>
		);
	}
}

const StyledApp = styled(App)`
	height: 100vh;
	width: 100vw;
	position: fixed;
`;

export {
	StyledApp as App,
};
