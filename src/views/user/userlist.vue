<template>
    <div class="wrap">
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>          
            </el-breadcrumb>
        </div>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                prop="username"
                label="姓名"
                width="150">
                </el-table-column>
                <el-table-column
                prop="desc"
                label="描述"
                width="120">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="电话"
                width="120">
                </el-table-column>
                <el-table-column
                prop="sex"
                label="性别"
                :formatter = "formmatterColumn"
                width="120">
                </el-table-column>
                 <el-table-column  label="头像" width="150">
                    <template slot-scope="scope">
                        <img :src="scope.row.avatar" class="avatar">
                    </template>
                </el-table-column>
                <el-table-column
                prop="job"
                label="职业"
                width="150px"
                >
                </el-table-column>
                <el-table-column
                label="操作"
                width="200">
                <template slot-scope="scope">
                    <el-button  size="small">编辑</el-button>
                    <el-button @click="handleClick(scope.row._id)" type="danger" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                @current-change="handleCurrentChange"
                :current-page="formData.pn"
                :page-size="formData.size"
                layout="total,  prev, pager, next, jumper"
               
                :total="count"
                >
                </el-pagination>
            </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableData:[],
                formData:{
                    pn:1,
                    size:4,

                },
                // length:"",
                pnTotal:1,
                count:1
            }
        },
        methods:{
            getData(){
                this.$axios.get('/adminUser/list',{pn:this.formData.pn,size:this.formData.size}).then(res=>{
                    console.log(res)
                    this.tableData=res.data
                    this.count=res.count
                })
            },
            handleCurrentChange(val) {
                this.formData.pn=val
                this.getData()
            },
            handleClick(id){
                this.$axios.delete(`/adminUser/del/${id}`).then(res=>{
                    if(res.code==200){   
                        this.$message.success(res.msg)
                        console.log(res)
                        this.getData()
                    }else{
                        this.$message.error(res.msg)
                    }
                })
            },
            formmatterColumn(row, column, cellValue, index){
                console.log(row, column, cellValue, index)
                if(row.sex==1){
                    return "男"
                }else{
                    return "女"
                }
            }
            
        },
        // computed:{
        //     sex(){
        //         if(formData.sex==1){
        //             return "男"
        //         }else{
        //             return "女"
        //         }
        //     }
        // },
        created(){
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
.wrap{
//   margin:50px 0px 0px 200px;
  padding: 0px 50px;
  .avatar{
      height:80px ;
      width: 80px;
  }
  .breadcrumb{
      padding:10px 0px;
  }
}
</style>