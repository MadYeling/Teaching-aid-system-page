import {Axios} from "./axios";
import {Url} from "./url";
import { MessageBox } from 'element-ui';

export class Index {
    axios: any;

    constructor() {
        this.axios = new Axios();
    }

    public loginRequest(params: object) {
        this.axios.postRequest(Url.loginController + "/login.json", params)
            .then((result: any) => {
                result.data;
                if (result.data.MyStatus === 0) {
                    console.log("错误");
                    MessageBox.alert('账号或密码错误！', '提示', {
                        confirmButtonText: '确定',
                    });
                } else if (result.data.MyStatus === 1) {
                    console.log("正确");
                    MessageBox.alert('登录成功！', '提示', {
                        confirmButtonText: '确定',
                    });
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}