import {LaborType} from 'src/models/primitive/labor-type';

export class Contractor {
	public id?: string;
	public hireDate?: Date = new Date();
	public type?: string = 'Subcontractor';
	public laborType?: LaborType;
	public hourlyRate?: number;

	public constructor(args: {
		id?: string,
		hireDate?: Date,
		type?: string,
		laborType?: LaborType,
		hourlyRate?: number,
	}) {
		Object.assign(this, args);
	}
}
