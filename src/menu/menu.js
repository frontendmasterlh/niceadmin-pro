let menu = {}

// 首页
menu.home = {
    name: '主页',
    icon: 'nice-icon-dashboard',
    children: {}
}

let homeChildren = menu.home.children

homeChildren.dashboard = {
    name: '仪表盘',
    path: '/dashboard'
}

// 组件
menu.component = {
    name: '组件',
    icon: 'nice-icon-deploymentunit',
    children: {}
}

let componentChildren = menu.component.children

componentChildren.button = {
    name: '按钮',
    path: '/components/button'
}
componentChildren.nav = {
    name: '菜单导航',
    path: '/components/nav'
}

// 设置
menu.set = {
    name: '设置',
    icon: 'nice-icon-shezhi',
    children: {}
}

let setChildren = menu.set.children

setChildren.system = {
    name: '系统设置',
    icon: 'nice-icon-shezhi',
    children: {}
}

let systemChildren = setChildren.system.children

systemChildren.website = {
    name: '网站设置',
    path: '/system/website'
}

setChildren.user = {
    name: '我的设置',
    icon: 'nice-icon-shezhi',
    children: {}
}

let userChildren = setChildren.user.children

userChildren.info = {
    name: '基本资料',
    path: '/mySetting/userInfo'
}

userChildren.password = {
    name: '修改密码',
    path: '/mySetting/password'
}

export default menu