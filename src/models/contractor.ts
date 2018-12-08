import { LaborType } from 'src/models/labor-type';

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
		laborType?: LaborType,
		hourlyRate?: number,
	}) {
		const argsDefaults = {
			hireDate: new Date(),
			type: 'Subcontractor',
			laborType: LaborType.DIRECT,
			hourlyRate: 0,
		};

		Object.assign(this, argsDefaults, args);
	}
}
