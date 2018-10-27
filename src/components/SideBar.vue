<template>
    <div>
        <el-menu
            class="content-wrap"
            background-color="#545c64"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b">
            <el-submenu index='用户管理'>
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
                </template>
                <el-menu-item index="userlist">管理员列表</el-menu-item>
                <el-menu-item index="adduser">添加管理员</el-menu-item>
            </el-submenu>
            <el-submenu index='轮播图管理'>
                <template slot="title">
                <i class="el-icon-menu"></i>
                <span>轮播图管理</span>
                </template>
                <el-menu-item index="imgslist">轮播图列表</el-menu-item>
                <el-menu-item index="addimgs">添加轮播图</el-menu-item>
            </el-submenu>
            <el-submenu index='新闻管理'>
                <template slot="title">
                <i class="el-icon-setting"></i>
                <span>新闻管理</span>
                </template>
                <el-menu-item index="newslist">新闻列表</el-menu-item>
                <el-menu-item index="addnews">添加新闻</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.el-menu{
    border-right-width: 0px;
}
</style>