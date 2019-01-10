import { Primitive } from './';

export class EmployeeType extends Primitive {
	static salary = new EmployeeType(
		'salary',
		'Salary',
		'Receives a fixed regular payment, typically expressed as an annual sum.',
	);

	static hourly = new EmployeeType(
		'hourly',
		'Hourly',
		'Paid an hourly wage for their services, as opposed to a fixed salary.',
	);
}
