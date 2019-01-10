export class Primitive {
	constructor(
		public id: string,
		public name: string = id,
		public description?: string,
	) {
	}
}
