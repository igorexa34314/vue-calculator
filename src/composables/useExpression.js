import { reactive } from 'vue';
import { evaluate, round } from 'mathjs';
import { useStore } from 'vuex';

export function useExpression() {
	const store = useStore();

	const operators = ['*', '/', '-', '+', '='];
	const hasOperatorsInTheEnd = () => operators.some(el => expr.problem.endsWith(el));
	const expr = reactive({
		result: 0,
		problem: ''
	});

	const solveProblem = () => {
		if (hasOperatorsInTheEnd()) {
			expr.problem = expr.problem.slice(0, -1);
		}
		if (!expr.problem) {
			return;
		}
		try {
			expr.result = round(evaluate(expr.problem), 8);
			saveToHistory(expr.problem, expr.result);
		} catch (error) {
			console.warn('Expression: "' + expr.problem + '"', error);
			expr.result = 'Error';
		}
	};
	const enterCharacter = ch => {
		switch (ch) {
			case 'AC':
				expr.problem = '';
				expr.result = 0;
				break;
			case 'bs':
				if (expr.problem) {
					expr.problem = expr.problem.slice(0, -1);
				}
				break;
			case '+/-':
				if (solveProblem()) {
					expr.result = expr.problem * -1;
				} else if (expr.result) {
					expr.result *= -1;
				}
				saveToHistory(`-(${expr.problem})`, expr.result);
				break;
			case '%':
				if (solveProblem()) {
					expr.result = expr.problem / 100;
				} else if (expr.result) {
					expr.result /= 100;
				}
				saveToHistory(expr.problem + '%', expr.result);
				break;
			case 'sqrt':
			case 'log':
			case 'exp':
			case 'sin':
			case 'cos':
			case 'tan':
				if (hasOperatorsInTheEnd() || !expr.problem) {
					expr.problem += ch + '(';
				} else {
					expr.problem = ch + `(${expr.problem})`;
				}
				break;
			case '×':
				if (expr.problem && !hasOperatorsInTheEnd()) {
					expr.problem += '*';
				}
				break;
			case '÷':
				if (expr.problem && !hasOperatorsInTheEnd()) {
					expr.problem += '/';
				}
				break;
			case '=':
				solveProblem();
				break;
			case '.':
				if (
					!expr.problem
						.split(/\s*[-+\/*]\s*/g)
						.pop()
						.includes('.')
				) {
					expr.problem += ch.toString();
				}
				break;
			default:
				expr.problem += ch.toString();
				break;
		}
	};
	const showExpr = ex => {
		expr.problem = ex.problem;
		expr.result = ex.result;
	};
	const deleteExpr = exprItem => {
		store.commit('deleteProblemItem', exprItem);
	};
	const saveToHistory = (pr, res) => {
		if (pr && !isNaN(res) && res !== Infinity && res !== NaN) {
			const problemItem = {
				problem: pr,
				result: res
			};
			store.commit('addProblemItem', problemItem);
		}
	};

	return {
		expr,
		enterCharacter,
		showExpr,
		deleteExpr
	};
}
