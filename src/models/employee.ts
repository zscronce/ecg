import { LaborType } from './primitive/labor-type';
import { EmployeeType } from './primitive/employee-type';

export class Employee {
	public static RAISE_RATE: number = 0.02;
	public static HOURS_PER_WEEK: number = 40;
	public static HOURS_PER_YEAR: number = 2080;
	public static HOURS_PER_MONTH: number = 2080 / 12;

	public id?: string;
	public hireDate?: Date;
	public type?: EmployeeType;
	public laborType?: LaborType;

	public get hourlyRateWithRaise(): number {
		return Employee.roundDollars(this.hourlyRate * (1 + Employee.RAISE_RATE));
	}

	public set hourlyRateWithRaise(r: number) {
		this._hourlyRate = r / Employee.RAISE_RATE;
	}

	public get salaryRate(): number {
		return Employee.roundDollars(this._hourlyRate * Employee.HOURS_PER_YEAR);
	}

	public set salaryRate(r: number) {
		this._hourlyRate = r / Employee.HOURS_PER_YEAR;
	}

	public get monthlyRate(): number {
		return Employee.roundDollars(this._hourlyRate * Employee.HOURS_PER_MONTH);
	}

	public set monthlyRate(r: number) {
		this._hourlyRate = r / Employee.HOURS_PER_MONTH;
	}

	public get biWeeklyRate(): number {
		return Employee.roundDollars(this._hourlyRate * 2 * Employee.HOURS_PER_WEEK);
	}

	public set biWeeklyRate(r: number) {
		this._hourlyRate = r / (2 * Employee.HOURS_PER_WEEK);
	}

	public get hourlyRate(): number {
		return Employee.roundDollars(this._hourlyRate);
	}

	public set hourlyRate(r: number) {
		this._hourlyRate = r;
	}

	public constructor(args?: {
		id?: string,
		hireDate?: Date,
		type?: EmployeeType,
		laborType?: LaborType,
		hourlyRate?: number,
	}) {
		Object.assign(this, args);
	}

	private static roundDollars(n: number): number {
		return Math.round(n * 100) / 100;
	}

	private _hourlyRate: number = null;
}
