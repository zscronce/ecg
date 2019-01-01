import { Primitive } from './';

export enum ExpenseType {
	DL = 'DL',
	Fringe = 'Fringe',
	'G&A' = 'G&A',
	OH = 'OH',
}

export const expenseTypePrimitive = new Primitive(ExpenseType, 'epense-type');
