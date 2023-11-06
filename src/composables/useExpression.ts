import { ref } from 'vue';
import { useHistoryStore, Expression } from '@/stores/history';
import { evaluate, round } from '@/utils/mathjs';

export const useExpression = () => {
	const { addProblemItem, deleteProblemItem } = useHistoryStore();

	const operators = ['*', '/', '-', '+', '='];
	const hasOperatorsInTheEnd = () => operators.some(el => expression.value.problem.endsWith(el));

	const expression = ref<Expression>({
		problem: '',
		result: 0,
	});

	const solveProblem = (): void | Boolean => {
		try {
			if (hasOperatorsInTheEnd()) {
				expression.value.problem = expression.value.problem.slice(0, -1);
			}
			if (!expression.value.problem) {
				return;
			}
			expression.value.result = round(evaluate(expression.value.problem), 8);
			saveToHistory(expression.value.problem, expression.value.result);
		} catch (error) {
			console.warn('Expression: "' + expression.value.problem + '"', error);
			expression.value.result = 'Error';
		}
	};
	const applyCharToExp = (ch: string) => {
		switch (ch) {
			case 'AC':
				expression.value.problem = '';
				expression.value.result = 0;
				break;
			case 'bs':
				if (expression.value.problem) {
					expression.value.problem = expression.value.problem.slice(0, -1);
				}
				break;
			case '+/-':
				if (solveProblem()) {
					expression.value.result = +expression.value.problem * -1;
				} else if (expression.value.result) {
					expression.value.result = +expression.value.result * -1;
				}
				saveToHistory(`-(${expression.value.problem})`, expression.value.result);
				break;
			case '%':
				if (solveProblem()) {
					expression.value.result = +expression.value.problem / 100;
				} else if (expression.value.result) {
					expression.value.result = +expression.value.result / 100;
				}
				saveToHistory(expression.value.problem + '%', expression.value.result);
				break;
			case 'sqrt':
			case 'log':
			case 'exp':
			case 'sin':
			case 'cos':
			case 'tan':
				if (hasOperatorsInTheEnd() || !expression.value.problem) {
					expression.value.problem += ch + '(';
				} else {
					expression.value.problem = ch + `(${expression.value.problem})`;
				}
				break;
			case '×':
				if (expression.value.problem && !hasOperatorsInTheEnd()) {
					expression.value.problem += '*';
				}
				break;
			case '÷':
				if (expression.value.problem && !hasOperatorsInTheEnd()) {
					expression.value.problem += '/';
				}
				break;
			case '=':
				solveProblem();
				break;
			case '.':
				if (
					!expression.value.problem
						.split(/\s*[-+/*]\s*/g)
						.slice(-1)
						.includes('.')
				) {
					expression.value.problem += ch.toString();
				}
				break;
			default:
				expression.value.problem += ch.toString();
				break;
		}
	};
	const showExpression = (exp: Expression) => {
		expression.value.problem = exp.problem;
		expression.value.result = exp.result;
	};
	const deleteExpression = (exp: Expression) => {
		deleteProblemItem(exp);
	};
	const saveToHistory = (problem: Expression['problem'], result: Expression['result']) => {
		if (problem && !isNaN(+result) && result !== Infinity) {
			const problemItem = {
				problem,
				result,
			};
			addProblemItem(problemItem);
		}
	};

	return {
		expression,
		applyCharToExp,
		showExpression,
		deleteExpression,
	};
};
