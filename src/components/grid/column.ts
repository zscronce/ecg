/**
 * @class GridColumn
 * @description Describes how a field should be displayed in its cell in this GridRow
 * @property {string} key - a key with which we'll retrieve a value from the 'data' object
 * @property {'text' | 'number' | 'date' | 'select'} type - editor to use for editing cell values
 * @property {string} label - labels the column, can be anything
 * @property {boolean} [editable] - whether a user can edit the value: defaults to true
 * @property {(value: any) => string} [formatter] - transforms values in to human-readable strings
 * @property {{[name: string]: any}} [selectOptions]
 */
export class GridColumn {
	public static DEFAULT_FORMATTER = function(value: any): string {
		try {
			return value.toString();
		} catch (e) {
			return '';
		}
	};

	public key: string = '';
	public type: string = 'text';
	public label: string = '';
	public editable: boolean = true;
	public formatter?: (value: any) => string = GridColumn.DEFAULT_FORMATTER;
	public selectOptions?: {
		[_: string]: any,
	};

	constructor(args: {
		key: string,
		type?: 'text' | 'number' | 'currency' | 'date' | 'select' | 'checkbox' | 'switch',
		label?: string,
		editable?: boolean,
		formatter?: (value: any) => string,
		selectOptions?: {
			[key: string]: any,
		},
	}) {
		Object.assign(this, args);
	}

	public get isNumeric(): boolean {
		return this.type === 'number' || this.type === 'currency';
	}
}