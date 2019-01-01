export class Primitive<T> {
	constructor(public values: T, public id: string) {
	}

	add(value: string, description: string): Primitive<T> {
		if (this.values[value] != null) {
			const msg = `added duplicate primitive: ${value} already exists in ${JSON.stringify(this.values)}`;
			throw new TypeError(msg);
		}

		this.values[value] = description;
		return this;
	}
}
