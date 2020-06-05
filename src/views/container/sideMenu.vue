<template>
    <el-menu
            :default-active="activePath"
            router
            class="menu"
            background-color="#001529"
            text-color="#fff"
            active-text-color="#2d8cf0">
        <div class="align_c logo">
            <el-image style="width: 150px; height: 34px;"
                      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
        </div>

        <div v-for="(item,index) in menuList" :key="index">
            <el-menu-item v-if="item.children&&item.children.length==1" :index="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
            </el-menu-item>
            <el-submenu v-else-if="item.children&&item.children.length>1" :index="item.path">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </template>
                <el-menu-item-group class="submenu">
                    <el-menu-item v-if="tmp.isMenu" v-for="(tmp,i) in item.children" :key="i" :index="tmp.path">
                        <i :class="tmp.icon"></i>
                        <span slot="title">{{tmp.name}}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </div>
    </el-menu>
</template>

<script>
    export default {
        name: "SideMenu",
        computed: {
            activePath() {
                return this.$route.path
            },
            menuList() {
                return this.$router.options.routes.filter(item => {return item.isMenu});
            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
.menu {
    height: 100vh;
    .logo {
        margin-top: 15px;
    }
}
.menu/deep/ .el-menu-item-group__title {
    padding: 0;
}
.submenu/deep/ .el-menu-item {
    min-width: 199px;
}
</style>
