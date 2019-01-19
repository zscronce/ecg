import {Project} from 'src/models/project';
import {ProjectType} from 'src/models/primitive/project-type';
import {ExpenseType} from 'src/models/primitive/expense-type';

export const exampleProjects: Project[] = [
	new Project({
		id: 'Project #1',
		type: ProjectType.project,
		expenseType: ExpenseType.dl,
	}),
	new Project({
		id: 'Project #2',
		type: ProjectType.project,
		expenseType: ExpenseType.dl,
	}),
	new Project({
		id: 'Project #3',
		type: ProjectType.project,
		expenseType: ExpenseType.dl,
	}),
	new Project({
		id: 'Project #4',
		type: ProjectType.project,
		expenseType: ExpenseType.dl,
	}),
	new Project({
		id: 'Project #5',
		type: ProjectType.project,
		expenseType: ExpenseType.dl,
	}),
	new Project({
		id: 'Project #6',
		type: ProjectType.project,
		expenseType: ExpenseType.dl,
	}),
	new Project({
		id: 'PTO',
		type: ProjectType.pto,
		expenseType: ExpenseType.fringe,
	}),
	new Project({
		id: 'Holiday',
		type: ProjectType.holiday,
		expenseType: ExpenseType.fringe,
	}),
	new Project({
		id: '401K',
		type: ProjectType['401K'],
		expenseType: ExpenseType.fringe,
	}),
	new Project({
		id: 'G&A',
		type: ProjectType.project,
		expenseType: ExpenseType['G&A'],
	}),
	new Project({
		id: 'OH',
		type: ProjectType.project,
		expenseType: ExpenseType.oh,
	}),
];
