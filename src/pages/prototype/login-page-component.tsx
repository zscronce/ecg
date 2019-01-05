// import React from 'react';
//
// class LoginPageState {
// 	currentAttempt: null | Promise<boolean>;
// 	username: string;
// 	password: string;
//
// 	get error(): string | null {
// 		return this._error;
// 	}
// 	set error(val: string) {
// 		this._error = val;
// 	}
//
// 	get attempt(): false | Promise<boolean> {
// 		return this._attempt == null || this._attempt;
// 	}
//
// 	get isUsernameValid(): boolean {
// 		return this.username !== 'error';
// 	}
//
// 	get isPasswordValid(): boolean {
// 		return this.password === 'password';
// 	}
//
// 	login(): Promise<boolean> {
// 		const resolve: (value: boolean) => void = {
//
// 		}
// 		this._attempt = new Promise<boolean>()
// 	}
//
// 	constructor() {
// 		this._error = null;
// 		this._attempt = null;
// 		this._username = '';
// 		this._password = '';
// 	}
//
// 	private _error: null | string = null;
// 	private _attempt: null | Promise<boolean>;
// 	private _password: string = 'password';
// 	private _username: string = '';
// }
//
// export class LoginPageComponent extends React.Component<{}, LoginPageState> {
//
// }
