let menu = [
	{
		name: "主页",
		icon: "nice-icon-dashboard",
		index: "1",
		children: [
			{
				name: '控制台',
				index: "1-1",
				path: "/dashboard"
			}
		]
	},
	{
		name: '组件',
		icon: 'nice-icon-deploymentunit',
		index: "2",
		children: [
			{
				name: '栅格布局',
				index: "2-1",
				path: '/components/grid'
			},
			{
				name: '按钮集合',
				index: "2-2",
				path: '/components/button'
			},
			{
				name: '菜单导航',
				index: "2-3",
				path: '/components/nav'
			},
			{
				name: "表单",
				index: "2-4",
				icon: "nice-icon-read",
				children: [
					{
						name: "基础表单",
						index: "2-4-1",
						path: '/components/form/element'
					},
					{
						name: "组合表单",
						index: "2-4-2",
						path: '/components/form/group'
					}
				]
			}
		]
	},
	{
		name: '页面',
		icon: 'nice-icon-read',
		index: "3",
		children: [
			{
				name: '404页面',
				index: "3-1",
				path: '/pages/404'
			},
		]
	}
]

export default menu