import React, { useState, lazy, Suspense } from 'react';
import { Button } from 'antd';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styles from './index.less';
import Child2 from './child2';

export default () => {
	const [count, setCount] = useState('1111');

	return (
		<div className={styles.helloworld}>
			<span style={{ color: 'red' }}>{count}</span>
			<Button type="primary" onClick={() => setCount(count + 1)}>
				点击
			</Button>

			<Suspense fallback={<span>12321</span>}>
				<HashRouter>
					<Switch>
						<Route path="/hello" component={lazy(() => import('./child1'))} />
						<Route path="/world" component={Child2} />
					</Switch>
				</HashRouter>
			</Suspense>
		</div>
	);
};
