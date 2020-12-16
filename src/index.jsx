import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import store from '@store/index';
import { Provider } from 'react-redux';
import App from './App';
import 'moment/locale/zh-cn';
import './style/common.css';

moment.locale('zh-cn');

ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<Provider store={store}>
			<App />
		</Provider>
	</ConfigProvider>,
	document.getElementById('root'),
);

if (module.hot) {
	module.hot.accept();
}
