const rootRouter = [
	{
		key: 'home',
		name: '首页',
		path: '/home',
		components: () => import('@views/home/index'),
	},
	{
		key: 'login',
		name: '登录',
		path: '/login',
		components: () => import('@views/login/index'),
	},
];

const contentRouter = [
	{
		key: 'data',
		name: '数据汇总',
		path: '/home/data',
		icon: '',
		showMenu: true,
		components: () => import('@views/data/index'),
	},
	{
		key: 'adver',
		name: 'APP首屏广告',
		path: '/home/adver',
		icon: '',
		showMenu: true,
		components: () => import('@views/data/index'),
	},
	{
		key: 'area',
		name: '区域管理',
		path: '/home/area',
		icon: '',
		showMenu: true,
		components: () => import('@views/area/index'),
	},
	{
		key: 'shop',
		name: '洗衣店管理',
		path: '/home/shop',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
	{
		key: 'account',
		name: '账号管理',
		path: '/home/account',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
	{
		key: 'swiper',
		name: 'APP轮播图',
		path: '/home/swiper',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
	{
		key: 'cabinet',
		name: '洗衣柜管理',
		path: '/home/cabinet',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
	{
		key: 'clothing',
		name: '衣物管理',
		path: '/home/clothing',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
	{
		key: 'order',
		name: '订单管理',
		path: '/home/order',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
	{
		key: 'intergral',
		name: '积分兑换管理',
		path: '/home/intergral',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
	{
		key: 'member',
		name: '会员管理',
		path: '/home/member',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
	{
		key: 'exception',
		name: '柜子使用记录',
		path: '/home/exception',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
	{
		key: 'options',
		name: '意见反馈',
		path: '/home/options',
		icon: '',
		showMenu: true,
		components: () => import('@views/shop/index'),
	},
];

export default { rootRouter, contentRouter };
