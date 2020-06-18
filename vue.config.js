module.exports = {
    devServer: {
        host: "localhost",//要设置当前访问的ip 否则失效
        open: false, //浏览器自动打开页面
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
