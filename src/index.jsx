import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import Test from '@views/home';
import './style/common.css';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<Test />
	</ConfigProvider>,
	document.getElementById('root'),
);

if (module.hot) {
	module.hot.accept();
}
