export function cloneClassObject<T>(
	obj: T & {
		constructor: {
			new(): T,
		},
	},
): T {
	const clone: T = new (obj.constructor)();

	const myPropNames: string[] = Object.getOwnPropertyNames(obj);
	myPropNames.forEach((propName: string) => clone[propName] = obj[propName]);

	return clone;
}
