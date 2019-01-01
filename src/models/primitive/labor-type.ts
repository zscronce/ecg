import { Primitive } from './';

export enum LaborType {
	Direct = 'Labor involved in the hands-on production of goods and services',
	Indirect = 'Any non-direct labor',
}

export const laborTypePrimitive = new Primitive(LaborType, 'labor-type');
