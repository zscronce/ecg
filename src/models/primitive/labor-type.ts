import { Primitive } from './';

export class LaborType extends Primitive {
	static direct = new LaborType(
		'direct',
		'Direct',
		'Labor involved in the hands-on production of goods and services',
	);

	static indirect = new LaborType(
		'indirect',
		'Indirect',
		'Any non-direct labor',
	);
}
