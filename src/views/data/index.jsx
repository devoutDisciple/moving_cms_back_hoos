import React from 'react';
import TitleChunk from './TitleChunk';
import styles from './index.less';

export default () => (
	<div className={styles.data}>
		<div className={styles.title}>
			<TitleChunk title="订单总量(单)" num={100} desc="今日订单总量: 50" />
			<TitleChunk title="订单总量(单)" num={100} desc="今日订单总量: 200" />
			<TitleChunk title="订单总量(单)" num={100} desc="今日订单总量: 200" />
			<TitleChunk title="订单总量(单)" num={100} desc="今日订单总量: 200" />
			<TitleChunk title="订单总量(单)" num={100} desc="今日订单总量: 200" />
		</div>
		<div className={styles.content}>123</div>
	</div>
);
