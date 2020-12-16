import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getLoginFunc } from '@store/action';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '@views/home/index';
import Login from '@views/login';

export default () => {
	const user = useSelector((state) => state.user);
	useEffect(() => {
		console.log(user, 222);
		getLoginFunc();
	}, []);

	return (
		<HashRouter>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/login" component={Login} />
			</Switch>
		</HashRouter>
	);
};
