import {ProjectType} from './primitive/project-type';
import {ExpenseType} from './primitive/expense-type';

export class Project {
	public id?: string;
	public type?: ProjectType;
	public expenseType?: ExpenseType;

	public constructor(args: {
		id?: string,
		type?: ProjectType,
		expenseType?: ExpenseType,
	}) {
		Object.assign(this, args);
	}
}
