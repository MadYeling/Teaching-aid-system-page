import axios, {AxiosRequestConfig} from "axios";
import {Notification} from "element-ui";

export class Interceptors {
    public instance: any;

    constructor() {
        this.instance = axios.create();
        this.initInterceptors();
    }

    public getInterceptors() {
        return this.instance;
    }

    public initInterceptors() {
        this.instance.defaults.timeout = 1000 * 12;
        this.instance.defaults.withCredentials = true;

        // 请求拦截
        this.instance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                if (config.method === 'post') {
                    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                }
                return config;
            },
            (err: any) => {
                return Promise.reject(err);
            }
        );

        //响应拦截
        this.instance.interceptors.response.use(
            (res: any) => {
                if (res.status === 200) {
                    console.log("拦截器：");
                    console.log(res.data);
                    return Promise.resolve(res);
                } else {
                    Interceptors.errorHandle(res);
                    return Promise.reject(res);
                }
            },
            (error: any) => {
                const {response} = error;
                if (response) {
                    // 请求已发出，但是不在2xx的范围
                    Interceptors.errorHandle(response);
                    return Promise.reject(response);
                } else {
                    Notification.error({
                        title: '错误',
                        message: '网络无连接'
                    });
                }
            }
        );
    }

    /**
     * 连接返回status不为200时的处理方法
     *
     * @param res 返回的内容
     */
    private static errorHandle(res: any) {
        // 状态码判断
        switch (res.status) {
            case 401:
                break;
            case 403:
                break;
            case 404:
                Notification.error({
                    title: '错误',
                    message: '找不到指定服务器'
                });
                break;
            default:
        }
    }
}