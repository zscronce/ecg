import React from 'react';
import { EmployeeGrid } from 'src/components/grid/model-types/employee';

export class EmployeeGridPage extends React.Component {
	constructor(props: any) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<EmployeeGrid />
		);
	}
}
