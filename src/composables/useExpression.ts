import { reactive } from 'vue';
import { evaluate, round } from 'mathjs';
import { useHistoryStore } from '@/stores/history';
import { Expression } from '@/types/Expression';

export function useExpression() {
	const { addProblemItem, deleteProblemItem } = useHistoryStore();

	const operators = ['*', '/', '-', '+', '='];
	const hasOperatorsInTheEnd = () => operators.some(el => expr.problem.endsWith(el));
	const expr: Expression = reactive({
		problem: '',
		result: 0
	});

	const solveProblem = (): void | Boolean => {
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
	const enterCharacter = (ch: string) => {
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
					expr.result = +expr.problem * -1;
				} else if (expr.result) {
					expr.result = +expr.result * -1;
				}
				saveToHistory(`-(${expr.problem})`, expr.result);
				break;
			case '%':
				if (solveProblem()) {
					expr.result = +expr.problem / 100;
				} else if (expr.result) {
					expr.result = +expr.result / 100;
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
						.slice(-1)
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
	const showExpr = (ex: Expression) => {
		expr.problem = ex.problem;
		expr.result = ex.result;
	};
	const deleteExpr = (exprItem: Expression) => {
		deleteProblemItem(exprItem);
	};
	const saveToHistory = (pr: Expression['problem'], res: Expression['result']) => {
		if (pr && !isNaN(+res) && res !== Infinity) {
			const problemItem = {
				problem: pr,
				result: res
			};
			addProblemItem(problemItem);
		}
	};

	return {
		expr,
		enterCharacter,
		showExpr,
		deleteExpr
	};
}
