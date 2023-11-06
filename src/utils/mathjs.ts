import { create, evaluateDependencies, roundDependencies, factory } from 'mathjs/number';

// custom implementations of all functions you want to support
const mathFunctions: Record<string, ((...args: number[]) => number) | number> = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	multiply: (a, b) => a * b,
	divide: (a, b) => a / b,
	sqrt: a => a ** 0.5,
	exp: a => Math.exp(a),
	cos: a => Math.cos(a),
	tan: a => Math.tan(a),
	ctn: a => 1 / Math.tan(a),
	log: a => Math.log(a),
	pow: (a, b) => Math.pow(a, b),
	e: Math.E,
};

// create factories for the functions, and create an evaluate function with those
// these functions will also be used by the classes like Unit.
const { round, evaluate } = create(
	{
		roundDependencies,
		evaluateDependencies,
		...Object.keys(mathFunctions).reduce(
			(acc, name) => {
				acc[`create${name.charAt(0) + name.slice(1)}`] = factory(name, [], () => mathFunctions[name]);
				return acc;
			},
			{} as Record<string, any>
		),
	},
	{ number: 'number' }
);

export { round, evaluate };
