<template>
    <div>
        <span>
            欢迎来到党建e家后台管理系统
        </span>
        <div class="img-wrap " >
            <img v-if="!$store.state.adminUser_Info.avatar" src="../views/imgs/book.jpg" alt="">
            <img v-else :src="$store.state.adminUser_Info.avatar" alt="" >
        </div>
        <el-dropdown class="jiantou">
            <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" v-if="$store.state.adminUser_Info">
                <el-dropdown-item>{{$store.state.adminUser_Info.username}}</el-dropdown-item>
                <el-dropdown-item  @click.native="logout">退出登录</el-dropdown-item>  
            </el-dropdown-menu>
            <el-dropdown-menu slot="dropdown" v-else>
               <el-dropdown-item  @click.native="login">请点击登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                userinfo:""
            }
        },
        methods:{
            logout(){
                this.$axios.get("/adminUser/logout").then(res=>{
                    if(res.code==200){
                        this.$message.success(res.msg)
                        this.$store.commit("adminUser_Info",this.userinfo)
                        // this.$router.push("/")
                    }else{
                        this.$message.err(res.err)
                    }
                })
            },
            login(){
                this.$router.push('/')
            }
        },
      created(){
      }  
    }
</script>

<style scoped lang='scss'>
.img-wrap{
    position:absolute;
    height: 30px;
    width: 30px;
    top:0px;
    right: 40px;
    // border-radius: 50%;
    // overflow: hidden;
    img{
        height: 100%;
        width: 100%;
        border:1px solid red;
        border-radius: 50%;
    }
}
.jiantou{
    position:absolute;
    height: 30px;
    width: 30px;
    top:0px;
    right: 10px;
}
</style>