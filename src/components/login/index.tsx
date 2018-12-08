import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import { Log } from 'src/debug/log';

export class LoginComponent extends React.Component {
	constructor(props: any) {
		super(props);

		this.onGoogleSuccess = this.onGoogleSuccess.bind(this);
		this.onGoogleFailure = this.onGoogleFailure.bind(this);
	}

	@Log
	onGoogleSuccess(response: GoogleLoginResponse | GoogleLoginResponseOffline) {
		// TODO: implement
	}

	@Log
	onGoogleFailure(response: any) {
		// TODO: implement
	}

	render() {
		return (
			<div {...this.props}>
				<TextField fullWidth type="text" name="username" label="Username" autoFocus />
				<TextField fullWidth type="password" name="password" label="Password" />
				<Button fullWidth color="primary">Log In</Button>
				<div>or...</div>
				<GoogleLogin
					clientId="377828500718-2uemj1rrlpjh7gbuoiuoovcrslhogjc0.apps.googleusercontent.com"
					onSuccess={this.onGoogleSuccess}
					onFailure={this.onGoogleFailure}
					buttonText="Login with Google"
				/>
			</div>
		);
	}
}
