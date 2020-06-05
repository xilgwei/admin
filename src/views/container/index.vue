<template>
    <el-container class="home">
        <el-aside width="200px"><side-menu/></el-aside>
        <el-container>
            <el-header class="head">
                <el-dropdown>
                    <div class="el-dropdown-link">
                        <el-image style="width: 34px; height: 34px;border-radius: 50%"
                                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                                  fit="fit"></el-image>
                        <i class="el-icon-caret-bottom"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>消息中心</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-main class="cont"><router-view/></el-main>
        </el-container>
    </el-container>
</template>

<script>
    import SideMenu from './sideMenu'
    export default {
        name: "container",
        components: {SideMenu}
    }
</script>

<style scoped lang="less">
.home {
    background: #f5f5f5;
}
.head {
    text-align: right;
    padding: 12px 40px;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
    background: #fff;
}
.cont {
    margin: 15px 0;
    padding: 0 15px 0;
    overflow-y: auto;
    height: calc(100vh - 90px);
    box-sizing: border-box;
}
    .el-image {
        vertical-align: middle;
        margin-right: 7px;
    }
</style>
