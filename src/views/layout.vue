<template>
    <div>
        <div class="head-wrap">
            <Header></Header>
        </div>
        <div class="sideBar-wrap">
            <SideBar class="sideBar"></SideBar>
        </div>
        <div>
            <router-view></router-view>
        </div>
    <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import Header from '../components/Header'
import SideBar from '../components/SideBar'
// import Footer from '../components/Footer'
    export default {
        components:{
            Header,
            SideBar,
        }
    }
</script>

<style scoped lang='scss'>
.sideBar-wrap{
    position: fixed;
    width: 200px;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    background-color:#545c64;
    .sideBar{
        overflow: hidden;
    }
}
.head-wrap{
    position: fixed;
    left: 200px;
    top: 0px;
    right: 0px;
    text-align: center;
    font-size: 26px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgb(206, 206, 206);
}
</style>