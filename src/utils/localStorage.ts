export const saveToLocalStorage = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T extends unknown>(key: string) => {
	return JSON.parse(localStorage.getItem(key) ?? 'null') as T | null;
};
