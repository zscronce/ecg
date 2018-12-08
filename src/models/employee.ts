import { LaborType } from './labor-type';
import { EmployeeType } from './employee-type';

export class Employee {
	public static RAISE_RATE: number = 0.02;
	public static HOURS_PER_WEEK: number = 40;
	public static HOURS_PER_YEAR: number = 2080;
	public static HOURS_PER_MONTH: number = 2080 / 12;

	public id: string = null;
	public hireDate: Date = null;
	public empType: EmployeeType = null;
	public laborType: LaborType = null;

	public constructor(
		args?: {
			id: string,
			hireDate?: Date,
			empType?: EmployeeType,
			laborType?: LaborType,
			hourlyRate?: number,
			hourlyRateWithRaise?: number,
			salaryRate?: number,
			monthlyRate?: number,
			biWeeklyRate?: number,
		},
	) {
		Object.assign(this, args);
	}

	public get hourlyRate(): number {
		return this.roundDollars(this._hourlyRate);
	}
	public set hourlyRate(r: number) {
		this._hourlyRate = r;
	}

	public get hourlyRateWithRaise(): number {
		return this.roundDollars(this.hourlyRate * (1 + Employee.RAISE_RATE));
	}
	public set hourlyRateWithRaise(r: number) {
		this._hourlyRate = r / Employee.RAISE_RATE;
	}

	public get salaryRate(): number {
		return this.roundDollars(this._hourlyRate * Employee.HOURS_PER_YEAR);
	}
	public set salaryRate(r: number) {
		this._hourlyRate = r / Employee.HOURS_PER_YEAR;
	}

	public get monthlyRate(): number {
		return this.roundDollars(this._hourlyRate * Employee.HOURS_PER_MONTH);
	}
	public set monthlyRate(r: number) {
		this._hourlyRate = r / Employee.HOURS_PER_MONTH;
	}

	public get biWeeklyRate(): number {
		return this.roundDollars(this._hourlyRate * 2 * Employee.HOURS_PER_WEEK);
	}
	public set biWeeklyRate(r: number) {
		this._hourlyRate = r / (2 * Employee.HOURS_PER_WEEK);
	}

	private _hourlyRate: number = null;

	private roundDollars(n: number): number {
		return Math.round(n * 100) / 100;
	}
}
