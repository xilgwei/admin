<template>
    <div class="pb15">
        <el-row :gutter="20">
            <el-col :span="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 15px;">
                <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
                    <count-to :end="infor.count" count-class="count-style"/>
                    <p>{{ infor.title }}</p>
                </infor-card>
            </el-col>
        </el-row>
        <el-row class="mb15">
            <el-col :span="12" class="bgff pt15 pl15 rad6">
                <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"/>
            </el-col>
            <el-col :span="12" class="bgff pt15 rad6">
                <chart-bar style="height: 300px;" :value="barData" text="每周用户活跃量"/>
            </el-col>
        </el-row>
        <el-row class="bgff pt15 pb15 rad6">
            <el-col :span="24">
                <example style="height: 310px;"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import InforCard from '../../components/info-card'
    import CountTo from '../../components/count-to'
    import { ChartPie, ChartBar } from '../../components/charts'
    import Example from './example.vue'
    import user, {userInfo} from "../../api/user";
    export default {
        components: {
            InforCard,
            CountTo,
            ChartPie,
            ChartBar,
            Example
        },
        data() {
            return {
                inforCardData: [
                    { title: '新增用户', icon: 'el-icon-s-custom', count: 803, color: '#2d8cf0' },
                    { title: '累计点击', icon: 'el-icon-s-help', count: 232, color: '#19be6b' },
                    { title: '新增问答', icon: 'el-icon-question', count: 142, color: '#ff9900' },
                    { title: '分享统计', icon: 'el-icon-share', count: 657, color: '#ed3f14' },
                    { title: '新增互动', icon: 'el-icon-s-comment', count: 12, color: '#E46CBB' },
                    { title: '新增页面', icon: 'el-icon-s-ticket', count: 14, color: '#9A66E4' }
                ],
                pieData: [
                    { value: 335, name: '直接访问' },
                    { value: 310, name: '邮件营销' },
                    { value: 234, name: '联盟广告' },
                    { value: 135, name: '视频广告' },
                    { value: 1548, name: '搜索引擎' }
                ],
                barData: {
                    Mon: 13253,
                    Tue: 34235,
                    Wed: 26321,
                    Thu: 12340,
                    Fri: 24643,
                    Sat: 1322,
                    Sun: 1324
                }
            }
        },
        mounted() {

        },
        methods: {
            async userInfo () {
                const res = await user.userInfo()
                if (res.status == 200) {
                    console.log(1111)
                }
            }
        }
    }
</script>

<style scoped>
    .count-style{
        font-size: 50px;
    }
</style>
