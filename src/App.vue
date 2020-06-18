<template>
    <div id="app">
        <el-menu mode="horizontal" :default-active="defaultActiveIndex" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">签到情况</el-menu-item>
        </el-menu>
        <div style="height: 20px"></div>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import router from "@/router";

    @Component({
        components: {}
    })

    export default class App extends Vue {
        defaultActiveIndex: string = "1";

        handleSelect(key: string, keyPath: string): void {
            console.log(key);
            switch (key) {
                case "1":
                    router.push("/login");
                    break;
                case "2":
                    router.push("/sign");
                    break;
                default:
                    break;
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
