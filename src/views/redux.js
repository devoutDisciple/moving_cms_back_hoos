import { addReduce } from '@store/index';

const hello = (initState = { m: 100 }, action) => {
	switch (action.type) {
		case 'hello_world':
			return { m: initState.m + 100 };
		default:
			return { m: initState.m };
	}
};

export default addReduce({ hello });
