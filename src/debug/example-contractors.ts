import { Contractor } from 'src/models/contractor';
import { LaborType } from 'src/models/primitive/labor-type';

export const exampleContractors: Contractor[] = [
	new Contractor({
		id: 'Contractor #1',
		hireDate: new Date(2014, 8, 1),
		type: 'Subcontractor',
		laborType: LaborType.direct,
		hourlyRate: 108,
	}),
	new Contractor({
		id: 'Contractor #2',
		hireDate: new Date(2011, 0, 1),
		type: 'Subcontractor',
		laborType: LaborType.direct,
		hourlyRate: 80,
	}),
	new Contractor({
		id: 'Contractor #3',
		hireDate: null,
		type: 'Subcontractor',
		laborType: LaborType.direct,
		hourlyRate: 153.75,
	}),
	new Contractor({
		id: 'Contractor #4',
		hireDate: null,
		type: 'Subcontractor',
		laborType: LaborType.direct,
		hourlyRate: 126,
	}),
	new Contractor({
		id: 'Contractor #5',
		hireDate: new Date(2016, 8, 26),
		type: 'Subcontractor',
		laborType: LaborType.direct,
		hourlyRate: 92.25,
	}),
	new Contractor({
		id: 'Contractor #6',
		hireDate: new Date(2015, 8, 1),
		type: 'Subcontractor',
		laborType: LaborType.direct,
		hourlyRate: 128.13,
	}),
	new Contractor({
		id: 'Contractor #7',
		hireDate: new Date(2017, 5, 7),
		type: 'Subcontractor',
		laborType: LaborType.direct,
		hourlyRate: 117.3,
	}),
	new Contractor({
		id: 'Contractor #8',
		hireDate: null,
		type: 'Subcontractor',
		laborType: LaborType.direct,
		hourlyRate: 88,
	}),
];
