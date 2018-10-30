<template>
    <div class="wrap">
        <div class="content-wrap">
            <div class="input-wrap">
            <input type="text" name="" id="" placeholder="用户名" v-model="formdata.username">
            </div>
            <div class="input-wrap">
            <input type="text" name="" id="" placeholder="密码" v-model="formdata.password">
            </div>
            <div class="btn-wrap" @click="login">
            <button>确认登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                formdata:{
                    username:"",
                    password:""
                }
            }
        },
        methods:{
            login(){
                this.$axios.post("adminUser/login",this.formdata).then(res=>{
                    console.log(res)
                    // this.$store.commit("adminUser_Info",res.data)
                    this.$store.commit("adminUser_Info",res.data)
                    console.log(this.$store.state.adminUser_Info)
                    if(res.code==200){
                        this.$router.push('/layout/home')
                         this.$message.success(res.msg)
                    }else{
                        this.$message.info(res.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 18px;
    color: #666;
    background-color: #565c64;
    .content-wrap{
        height: 400px;
        width: 500px;
        background-color:#fff;
        margin: 100px auto;
        padding: 50px;
        box-sizing: border-box;
        .input-wrap,.btn-wrap{
            // width: 100%;
            height: 50px;
            line-height: 50px;
            margin: 0px auto  40px;    
            input{
                width:100%;
                height: 100%;
                padding:0px 20px ;
                box-sizing: border-box;
                font-size: 18px;
                color: #666;
                border-radius: 4px;
                border: 1px solid #666;
                overflow: hidden;
                outline: none;

            }
            button{
                width: 100%;
                height: 100%;
                font-size: 18px;
                color: #666;
                border-radius: 4px;
                outline: none;
                background-color: rgb(91, 50, 255);
                outline: none;
                // border: none;
                box-sizing: border-box;
                color: #fff;
            }
        }
    }
}
</style>