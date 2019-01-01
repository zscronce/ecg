import { LaborType } from 'src/models/primitive/labor-type';
import { PrimitiveKey } from './primitive';

export class Contractor {
	public id: string;
	public hireDate: Date;
	public type: string;
	public laborType: LaborType;
	public hourlyRate: number;

	constructor(args: {
		id: string,
		hireDate?: Date,
		type?: string,
		laborType?: keyof LaborType,
		hourlyRate?: number,
	}) {
		const argsDefaults = {
			hireDate: new Date(),
			type: 'Subcontractor',
			laborType: LaborType.Direct,
			hourlyRate: 0,
		};

		Object.assign(this, argsDefaults, args);
	}
}
