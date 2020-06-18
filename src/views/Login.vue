<template>
    <div id="login">
        <div id="button">
            <el-button round id="studentLogin" type="primary" @click="dialogFormVisible = true">学生登录</el-button>
            <el-button round id="teacherLogin" type="warning" @click="">教师登录</el-button>
        </div>

        <el-dialog id="loginDialog" title="请登录" :visible.sync="dialogFormVisible" width="450px"
                   :close-on-click-modal=false>
            <el-form>
                <el-form-item label="用户名">
                    <el-input v-model="userName" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input show-password placeholder="请输入密码" v-model="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="onDialogOKClick">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from "vue-property-decorator";
    import {Index} from "@/config";

    @Component({
        components: {
        }
    })

    export default class Login extends Vue{
        name = "Login";

        dialogFormVisible: boolean = false;

        userName: string = "";
        password: string = "";
        index: Index = new Index();

        onDialogOKClick(): void {
            console.log("111");
            this.dialogFormVisible = false;
            // 调用Axios方法
            this.index.loginRequest({
                userName: this.userName,
                password: this.password
            });
        }
    }
</script>

<style scoped>

</style>