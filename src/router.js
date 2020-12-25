const rootRouter = [
	{
		key: 'home',
		name: '首页',
		path: '/',
		components: () => import('@views/home/index'),
	},
	{
		key: 'login',
		name: '登录',
		path: '/login',
		components: () => import('@views/login'),
	},
];

const contentRouter = [
	{
		key: 'data',
		name: '数据汇总',
		path: '/data',
		icon: '',
		showMenu: true,
		components: () => import('@views/data/index'),
	},
	{
		key: 'area',
		name: '区域管理',
		path: '/area',
		icon: '',
		showMenu: true,
		components: () => import('@views/area/index'),
	},
	{
		key: 'shop',
		name: '洗衣店管理',
		path: '/shop',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
];

export default { rootRouter, contentRouter };
