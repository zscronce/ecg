import { Project } from 'src/models/project';
import { ProjectType } from 'src/models/primitive/project-type';
import { ExpenseType } from 'src/models/primitive/expense-type';

export const exampleProjects: Project[] = [
	new Project({
		id: 'Project #1',
		type: ProjectType.Project,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'Project #2',
		type: ProjectType.Project,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'Project #3',
		type: ProjectType.Project,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'Project #4',
		type: ProjectType.Project,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'Project #5',
		type: ProjectType.Project,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'Project #6',
		type: ProjectType.Project,
		expenseType: ExpenseType.DL,
	}),
	new Project({
		id: 'PTO',
		type: ProjectType.PTO,
		expenseType: ExpenseType.Fringe,
	}),
	new Project({
		id: 'Holiday',
		type: ProjectType.Holiday,
		expenseType: ExpenseType.Fringe,
	}),
	new Project({
		id: '401K',
		type: ProjectType['401K'],
		expenseType: ExpenseType.Fringe,
	}),
	new Project({
		id: 'G&A',
		type: ProjectType.Project,
		expenseType: ExpenseType['G&A'],
	}),
	new Project({
		id: 'OH',
		type: ProjectType.Project,
		expenseType: ExpenseType.OH,
	}),
];
