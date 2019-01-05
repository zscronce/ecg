import { LaborType } from 'src/models/primitive/labor-type';

export class Contractor {
	id: string;
	hireDate: Date;
	type: string;
	laborType: LaborType;
	hourlyRate: number;

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
			laborType: LaborType.direct,
			hourlyRate: 0,
		};

		Object.assign(this, argsDefaults, args);
	}
}
