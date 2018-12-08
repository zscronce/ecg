import { Project } from 'src/models/project';
import { ProjectType } from 'src/models/project-type';
import { ExpenseType } from 'src/models/expense-type';

export const exampleProjects: Project[] = [
	new Project({
		id: 'Project #1',
		type: ProjectType.PROJECT,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'Project #2',
		type: ProjectType.PROJECT,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'Project #3',
		type: ProjectType.PROJECT,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'Project #4',
		type: ProjectType.PROJECT,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'Project #5',
		type: ProjectType.PROJECT,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'Project #6',
		type: ProjectType.PROJECT,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'PTO',
		type: ProjectType.PTO,
		expenseType: ExpenseType.FRINGE,
	}),
	new Project({
		id: 'HOLIDAY',
		type: ProjectType.HOLIDAY,
		expenseType: ExpenseType.FRINGE,
	}),
	new Project({
		id: '401K',
		type: ProjectType.FOUR01K,
		expenseType: ExpenseType.FRINGE,
	}),
	new Project({
		id: 'G&A',
		type: ProjectType.PROJECT,
		expenseType: ExpenseType.GNA,
	}),
	new Project({
		id: 'OH',
		type: ProjectType.PROJECT,
		expenseType: ExpenseType.OH,
	}),
];
