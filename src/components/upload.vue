<template>
    <div>
        <el-upload
            class="avatar-uploader"
            action="https://upload-z1.qiniup.com"
            :data="formdata"
            :show-file-list="false"
            :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>
</template>

<script>
    export default {
        props: {
        value: {
        props: String,
        default: ""
        }
    },
        data(){
            return{
              
                formdata:{
                    token:"",
                },
                imageUrl:""
            }
        },
        methods:{
            getkoken(){
                this.$axios.get("http://upload.yaojunrong.com/getToken").then(res=>{
                    console.log(res)
                    this.formdata.token=res.data
                    console.log(this.formdata.token)
                })
                console.log("aaa")
            },
             handleAvatarSuccess(file) {
                 console.log(file)
                this.imageUrl = file.url;
                this.$emit("input", this.imageUrl);
                }
            },
            created(){
                this.getkoken()
            },
            watch: {
                value(val) {
                this.imageUrl = val;
                }
            },
    }
</script>

<style scoped lang="scss">
.avatar-uploader {
    border: 1px dashed #d9d9d9;
    width:178px;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>