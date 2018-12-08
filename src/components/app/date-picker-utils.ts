import DateFnsUtils from '@date-io/date-fns';

export class DatePickerUtils extends DateFnsUtils {
	constructor(...args: any[]) {
		super(...args);
		this.dateFormat = 'MM/dd/yyyy';
	}
}
