import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import styles from './index.less';
import Menu from './Menu/index';
import Header from './Header';
import Footer from './Footer';
import router from '../../router';

const ContentSpin = () => (
	<div className={styles.right_suspense}>
		<Spin className={styles.right_suspense_loading} size="large" />
	</div>
);

export default () => (
	<div className={styles.layout}>
		<div className={styles.layout_left}>
			<Menu />
		</div>
		<div className={styles.layout_right}>
			<Header />
			<div className={styles.layout_right_content}>
				<Suspense fallback={<ContentSpin />}>
					<HashRouter>
						<Switch>
							{router.contentRouter.map((item) => (
								<Route key={item.key} path={item.path} component={lazy(item.components)} />
							))}
						</Switch>
					</HashRouter>
				</Suspense>
			</div>
			<Footer />
		</div>
	</div>
);
