import {Primitive} from './';

export class ExpenseType extends Primitive {
	static dl = new ExpenseType('DL');
	static fringe = new ExpenseType('Fringe');
	static ga = new ExpenseType('G&A');
	static oh = new ExpenseType('G&A');
}
