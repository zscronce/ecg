import Card from '@material-ui/core/Card';
import React from 'react';
import styled from 'styled-components';

import { LoginComponent } from '../components/login';

class LoginPage extends React.Component {
	constructor(props: any) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<Card {...this.props}>
				<LoginComponent/>
			</Card>
		);
	}
}

const StyledLoginPage = styled(LoginPage)`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
`;

export {
	StyledLoginPage as LoginPage,
};
