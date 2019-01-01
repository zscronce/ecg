import { Primitive } from './';

enum EmployeeType {
	Salary = 'Receives a fixed regular payment, typically expressed as an annual sum.',
	Hourly = 'Paid an hourly wage for their services, as opposed to a fixed salary.',
}

export const employeeTypePrimitive = new Primitive(EmployeeType, 'employee-type');
