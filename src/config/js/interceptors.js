import axios from "axios";

let againNum = 0;
//在main.js设置全局的请求次数，请求的间隙
const http = axios.create();
http.defaults.timeout = 15000;
http.defaults.withCredentials = true;
//请求拦截
http.interceptors.request.use(
    config => {
        //Content-Type 根据实际场景配置application/json 还是 application/x-www-form-urlencoded
        //if (config.method === 'post') {
        //  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        //}
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//响应拦截
http.interceptors.response.use(
    response => {
        return response.data;
    },
    err => {
        let config = err.config;
        //如果配置不存在或未设置重试选项，则返回错误信息
        if (againNum < 1) {
            if (err.message.includes("timeout")) {
                againNum++;
                const againHttp = new Promise(function (resolve) {
                    setTimeout(() => {
                        resolve();
                    }, 1000);
                });
                //请求重试
                return againHttp.then(function () {
                    config.baseURL = "";
                    //超时不在发送
                    return http(config);
                });
            }
        } else {
            return Promise.reject(err.response);
        }
    }
);
export default http;

