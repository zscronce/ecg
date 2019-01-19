import React from 'react';

import {Employee} from 'src/models/employee';
import {EmployeeType} from 'src/models/primitive/employee-type';
import {LaborType} from 'src/models/primitive/labor-type';
import {Grid, GridColumn} from 'src/components/grid';
import {currencyFormatter, dateFormatter} from 'src/components/grid/formatters';

import {exampleEmployees} from 'src/debug/example-employees';

export class EmployeeGrid extends React.Component {
	public static COLUMNS: GridColumn[] = [
		new GridColumn({
			key: 'id',
			label: 'Name',
		}),
		new GridColumn({
			key: 'hireDate',
			label: 'Hire Date',
			type: 'date',
			formatter: dateFormatter,
		}),
		new GridColumn({
			key: 'empType',
			label: 'Employee Type',
			type: 'select',
			selectOptions: [EmployeeType.salary, EmployeeType.hourly],
		}),
		new GridColumn({
			key: 'laborType',
			label: 'Labor Type',
			type: 'select',
			selectOptions: [LaborType.direct, LaborType.indirect],
		}),
		new GridColumn({
			key: 'hourlyRate',
			label: 'Hourly Rate',
			type: 'currency',
			formatter: currencyFormatter,
		}),
		new GridColumn({
			key: 'hourlyRateWithRaise',
			label: `Hourly Rate + ${(Employee.RAISE_RATE) * 100}%`,
			type: 'currency',
			formatter: currencyFormatter,
		}),
		new GridColumn({
			key: 'salaryRate',
			label: 'Salary Rate',
			type: 'currency',
			formatter: currencyFormatter,
		}),
		new GridColumn({
			key: 'monthlyRate',
			label: 'Monthly Rate',
			type: 'currency',
			formatter: currencyFormatter,
		}),
		new GridColumn({
			key: 'biWeeklyRate',
			label: 'Bi-Weekly Rate',
			type: 'currency',
			formatter: currencyFormatter,
		}),
	];

	public state: {
		employees: Employee[];
	};

	constructor(public props: any) {
		super(props);

		this.state = {employees: exampleEmployees};

		this.add = this.add.bind(this);
		this.delete = this.delete.bind(this);
	}

	public render(): JSX.Element {
		return (
			<Grid
				columns={EmployeeGrid.COLUMNS}
				data={this.state.employees}
				onAdd={this.add}
				onDelete={this.delete}
			/>
		);
	}

	private add(): void {
		const e: Employee = new Employee({
			id: '',
			hireDate: new Date(),
			type: EmployeeType.hourly,
			laborType: LaborType.direct,
			hourlyRate: 0,
		});

		this.state.employees.push(e);

		this.setState({
			employees: this.state.employees,
		});
	}

	private delete(employee: Employee): void {
		const employeeIndex = this.state.employees.indexOf(employee);
		this.state.employees.splice(employeeIndex, 1);
		this.setState({
			employees: this.state.employees,
		});
	}
}
