<template>
    <el-card class="">
        <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 7px 10px" type="primary">去编辑</el-button>
        </div>
        <el-form style="width: 700px" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称："><span>活动内容</span></el-form-item>
            <el-form-item label="活动名称："><span>2019-07-03</span> 至 <span> 2019-07-03</span></el-form-item>
            <el-form-item label="活动名称："><span>活动内容</span></el-form-item>
            <el-form-item label="活动名称："><span>活动内容</span></el-form-item>
            <el-form-item label="活动名称："><span>活动内容</span></el-form-item>
            <el-form-item label="活动名称：">
                <el-image
                        class="mr10"
                    style="width: 100px; height: 100px"
                    src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                    fit="cover"></el-image>
                <el-image
                        class="mr10"
                        style="width: 100px; height: 100px"
                        src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                        fit="cover"></el-image>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
