import React, { useEffect } from 'react';

export default () => {
	useEffect(() => {
		const a = 23;
		console.log(a);
		console.log(1111);
	}, []);
	return <div>data</div>;
};
