# vue-niceadmin-pro 后台管理系统自用

## 预览地址
[niceadmin-pro](http://nicenav.cn/niceadmin)

##### 登录
![Image text](https://image-static.segmentfault.com/186/150/1861508309-5f2a2058d2596)

## 目录结构
##### | --dist 生成打包后的文件
##### | --node_modules 安装的依赖包
##### | --public 静态资源会被输出到目录dist
##### | --src
##### |   |--apis 与后端交互使用相关方法和配置
##### |   |--assets 存放静态资源，图片等等
##### |   |--common 公共文件
##### |   |--components 公用组件
##### |   |--menu 菜单配置文件
##### |   |--router vue-router相关配置
##### |   |   |--index.js 导出路由配置，路由守卫配置
##### |   |   |--routes.js 所有路由
##### |   |--store vuex相关
##### |   |--utils 封装的工具函数
##### |   |--views 所有的路由组件
##### |   |--app.vue 顶层路由
##### |   |--main.js 入口文件
##### | --theme element-ui 自定义主题文件

## 安装运行
```shell
$ git clone https://github.com/lxhcool/niceadmin-pro.git
$ cd niceadmin-pro
$ npm install
$ npm run serve
```