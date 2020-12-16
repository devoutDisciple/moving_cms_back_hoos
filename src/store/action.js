import { getLogin } from '@service/login.js';

export const getLoginFunc = () => {
	getLogin().then((res) => {
		console.log(res, 9999);
	});
};

export const getTest = () => {
	getLogin().then((res) => {
		console.log(res, 9999);
	});
};
