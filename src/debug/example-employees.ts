import {Employee} from 'src/models/employee';
import {EmployeeType} from 'src/models/primitive/employee-type';
import {LaborType} from 'src/models/primitive/labor-type';

const zach = new Employee({
	id: 'Zach',
	type: EmployeeType.hourly,
	laborType: LaborType.indirect,
	hireDate: new Date(2018, 0, 1),
	hourlyRate: 15,
});

const katie = new Employee({
	id: 'Katie',
	type: EmployeeType.salary,
	laborType: LaborType.direct,
	hireDate: new Date(2010, 3, 1),
	hourlyRate: 20,
});

const scooby = new Employee({
	id: 'Scooby',
	type: EmployeeType.hourly,
	laborType: LaborType.direct,
	hireDate: new Date(2011, 0, 18),
	hourlyRate: 1,
});

const cole = new Employee({
	id: 'Cole',
	type: EmployeeType.salary,
	laborType: LaborType.indirect,
	hireDate: new Date(2012, 0, 1),
	hourlyRate: 2,
});

// Sample grid
export const exampleEmployees = [katie, zach, cole, scooby];
