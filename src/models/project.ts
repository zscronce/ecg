import { ProjectType } from './project-type';
import { ExpenseType } from './expense-type';

export class Project {
	public id: string;
	public type: ProjectType;
	public expenseType: ExpenseType;

	constructor(args?: {
		id: string,
		type: ProjectType,
		expenseType: ExpenseType,
	}) {
		Object.assign(this, args);
	}
}
