import {Interceptors} from "./interceptors";

import Qs from 'qs';
import {AxiosResponse} from "axios";

export class Axios {
    public axios: any;

    constructor() {
        this.axios = new Interceptors().getInterceptors();
    }

    public getRequest(url: string, params: object = {}) {
        const body = {
            parameter: {
                data: params,
            },
        };
        console.log(body);
        return new Promise((resolve, reject) => {
            this.axios
                .get(url, {
                    params: body
                })
                .then((response: any) => {
                    this.resultHandle(response, resolve);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    public postRequest(url: string, params: object = {}) {
        return new Promise((resolve, reject) => {
            this.axios
                .post(url, Qs.stringify(params))
                .then((res: any) => {
                    this.resultHandle(res, resolve);
                    console.log("axios:");
                    console.log(res.data);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    public resultHandle(res: any, resolve: any) {
        if (res.status > 0) {
            resolve(res);
        } else {
            this.errorHandle(res);
        }
    }

    public errorHandle(res: any) {
        // message.warn("发生了错误，内容：" + res.msg);  // 统一谈服务端提示,我们提示统一由服务端提供
        // 状态码判断
        switch (res.status) {
            case -102:
                break;
            case -152:
                break;
            default:
            // console.log(other);
        }
    }
}