//vue.config.js
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: '/',
    lintOnSave: false, // 是否开启eslint保存检测
    chainWebpack: config => {
    config.resolve.alias
        .set('@', resolve('src'))
        .set('common', resolve('src/common'))
        .set('styles', resolve('src/assets/styles'))
        .set('images', resolve('src/assets/images'))
        .set('shared', resolve('src/shared'))
},
devServer: {
    port: 8989,
    proxy: {
        '/apis': {
            target: 'http://localhost:8081', //要使用url模块解析的url字符串
            ws: true, //如果要代理websockets
            changeOrigin: true, // 必须加上这个才能跨域请求,  将主机头的源更改为目标URL
            pathRewrite: {
                '^/api': '/mock'
            }
        },
        '/cxpstatics': {
            target: "http://192.168.211.72",
            changeOrigin: true,
        },
        '/account/api': {
            target: "http://192.168.211.72",
            changeOrigin: true,
        },

    }
}
};