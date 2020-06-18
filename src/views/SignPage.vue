<template>
    <div id="sign">
        <el-container id="container">
            <el-header>
                <el-row id="head-row">
                    <el-col :span="2">
                        <div class="grid-content head-text" style="font-weight: bold">签到管理</div>
                    </el-col>
                    <el-col :span="19">
                        <div class="grid-content"></div>
                    </el-col>
                    <el-col :span="3">
                        <el-button round icon="el-icon-upload2">导出至Excel</el-button>
                    </el-col>
                </el-row>
            </el-header>

            <el-main>
                <div id="my-main">
                    <el-row style="padding-top: 10px">
                        <el-col :span="1" class="col-2">
                            <div class="grid-content date-text" style="font-weight: bold">日期：</div>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content" style="font-weight: bold">
                                <el-date-picker
                                        v-model="dataPickerValue"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="1" class="col-2">
                            <div class="grid-content date-text" style="font-weight: bold">时段：</div>
                        </el-col>

                        <el-col :span="3">
                            <el-select v-model="timeSelectorValue" placeholder="请选择">
                                <el-option
                                        v-for="item in time"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>

                        <el-col :span="1" class="col-2">
                            <div class="grid-content date-text" style="font-weight: bold">班级：</div>
                        </el-col>
                        <el-col :span="3">
                            <el-select v-model="classSelectorValue" placeholder="请选择">
                                <el-option
                                        v-for="item in myClass"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>

                        <el-col :span="8">
                            <div class="grid-content"></div>
                        </el-col>
                        <el-col :span="2">
                            <el-button type="success">查询</el-button>
                        </el-col>
                    </el-row>
                </div>

                <el-table

                        stripe
                        :data="tableData"
                        style="width: 100%"
                        :default-sort="{prop: 'classID', order: 'ascending'}">
                    <el-table-column
                            prop="classID"
                            label="课堂ID"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="日期"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="时段">
                    </el-table-column>
                    <el-table-column
                            prop="classroom"
                            label="教室"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="subject"
                            label="科目"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="grade"
                            label="年级"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="className"
                            label="班级"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="classNub"
                            label="班级人数">
                    </el-table-column>
                    <el-table-column
                            prop="signNub"
                            label="签到人数">
                    </el-table-column>
                    <el-table-column
                            prop="signText"
                            label="签到情况">
                    </el-table-column>
                    <el-table-column
                            prop="option"
                            label="操作">
                        <template>
                            <el-button type="text" size="small">查看详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>

        </el-container>

        <el-backtop></el-backtop>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {}
    })

    export default class SignPage extends Vue {
        name = "SignPage";
        dataPickerValue: string = "";

        data() {
            return {
                time: [
                    {
                        value: '1',
                        label: '08:00-09:30'
                    },
                    {
                        value: '2',
                        label: '10:00-11:30'
                    },
                    {
                        value: '3',
                        label: '13:30-15:00'
                    },
                    {
                        value: '4',
                        label: '15:30-17:00'
                    },
                    {
                        value: '5',
                        label: '19:00-19:50'
                    },
                    {
                        value: '6',
                        label: '20:10-22:00'
                    }
                ],
                myClass: [
                    {
                        value: '1',
                        label: '软件171'
                    },
                    {
                        value: '2',
                        label: '软件172'
                    },
                ],
                tableData: [
                    {
                        date: '2016-04-01',
                        classID: '10001',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '32',
                        signText: '1人未到'
                    },
                    {
                        date: '2016-04-02',
                        classID: '10002',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '1人迟到'
                    },
                    {
                        date: '2016-04-03',
                        classID: '10003',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-13',
                        classID: '10004',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-14',
                        classID: '10005',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-06',
                        classID: '10006',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-07',
                        classID: '10007',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-08',
                        classID: '10008',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-09',
                        classID: '10009',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-10',
                        classID: '10010',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-15',
                        classID: '10011',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-16',
                        classID: '10012',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-17',
                        classID: '10013',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-20',
                        classID: '10014',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-21',
                        classID: '10015',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-22',
                        classID: '10016',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                    {
                        date: '2016-04-23',
                        classID: '10017',
                        time: '08:00-09:30',
                        classroom: '3309',
                        subject: 'Vue',
                        grade: '大二',
                        className: '软件172',
                        classNub: '33',
                        signNub: '33',
                        signText: '正常'
                    },
                ]
            }
        }

        timeSelectorValue: string = "";
        classSelectorValue: string = "";
    }

</script>

<style scoped>
    #head-row {
        position: relative;
        top: 20px;
    }

    #my-main {
        background-color: white;
    }

    #container {
    }

    .col-2 {

        text-align: center;
        position: relative;
    }

    .grid-content {
        /*border-radius: 4px;*/
        min-height: 50px;
        text-align: center;
    }

    .date-text {
        line-height: 40px;
    }

    .head-text {
        font-size: 25px;
    }

</style>