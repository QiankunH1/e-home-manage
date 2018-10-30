<template>
    <div>
        <el-card class="card">
            <div slot="header">添加管理员</div>
            <el-form :model="formdata" label-width="80px" class="form-wrap">
                <el-form-item label="用户名" required>
                    <el-input v-model="formdata.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" required>
                    <el-input v-model="formdata.password" type="password" ></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="formdata.nickname"></el-input>
                </el-form-item>
                <el-form-item label="个性签名">
                    <el-input v-model="formdata.desc"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="formdata.phone"></el-input>
                </el-form-item>
                <el-form-item label="工作地点">
                    <el-input v-model="formdata.job"></el-input>
                </el-form-item>
                <el-form-item label="用户头像">
                    <upload v-model="formdata.avatar"></upload>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="formdata.sex" placeholder="请选择">
                        <el-option value="1" label="男"></el-option>
                        <el-option value="0" label="女"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit">确认添加</el-button>
                    <!-- <el-button type="primary" @click="handleSave" v-else>保存</el-button> -->
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import upload from "../../components/upload"
  export default {
    data(){
      return{
        formdata:{
          username:"",
          password:"",
          avatar:"",
          nickname:"",
          job:"",
          sex:"",
          phone:"",
          desc:"",
  
        }
      }
    },
    components:{
      upload,
    },
    methods:{
      handleSubmit(){
        this.$axios.post("/adminUser",this.formdata).then(res=>{
          if(res.code==200){
            this.$message.success(res.msg)
          }else{
            this.$message.error(res.msg)
          }
        })
      }
    },
    created(){

    }
  }
</script>

<style scoped lang="scss">
.wrap{
  padding: 10px 20px;
}
.el-input{
  width: 300px;
}
.input-wrap{
  margin: 10px 0px;
 
}
</style>