import { Primitive } from './';

export class ExpenseType extends Primitive {
	static dl = new ExpenseType('dl', 'DL');
	static fringe = new ExpenseType('fringe', 'Fringe');
	static ga = new ExpenseType('ga', 'G&A');
	static oh = new ExpenseType('oh', 'G&A');
}
