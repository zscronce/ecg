export const log = (
	target: any,
	methodName: string,
	descriptor: PropertyDescriptor,
): PropertyDescriptor => {
	if (descriptor.value instanceof Function) {
		const method = descriptor.value;
		descriptor.value = function(...args: any[]): any {
			const methodReturn = method.apply(this, args);
			console.log(`${target.constructor.name}::${methodName}(${args}) ->`, methodReturn);
			return methodReturn;
		};
	}

	return descriptor;
};
