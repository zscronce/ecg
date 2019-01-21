import {Primitive} from 'src/models/primitive';

/**
 * @class GridColumn
 * @description Describes how a field should be displayed in its cell in this GridRow
 * @property {string} key - a key with which we'll retrieve a value from the 'data' object
 * @property {'text' | 'number' | 'currency' | 'date' | 'select'} type - editor to use for editing cell values
 * @property {string} label - labels the column, can be anything
 * @property {boolean} [editable] - whether a user can edit the value: defaults to true
 * @property {(value: any) => string} [formatter] - transforms values in to human-readable strings
 * @property {{[name: string]: any}} [selectOptions]
 */
export class GridColumn {
	public key: string = '';
	public type: string = 'text';
	public label: string = '';
	public editable: boolean = true;
	public formatter?: (value: any) => string = GridColumn.defaultFormatter;
	public selectOptions?: {value: string, label: string}[];

	constructor(args: {
		key: string,
		type?: 'text' | 'number' | 'currency' | 'date' | 'select' | 'checkbox' | 'switch',
		label?: string,
		editable?: boolean,
		formatter?: (value: any) => string,
		selectOptions?: {[key: string]: any} | Primitive[],
	}) {
		Object.assign(this, args);
	}

	public get isNumeric(): boolean {
		return this.type === 'number' || this.type === 'currency';
	}

	private static defaultFormatter = (value: any): string => {
		try {
			return value.toString();
		} catch {
			return '';
		}
	}
}
