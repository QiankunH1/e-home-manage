<template>
    <div class="wrap">
       <template>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="author.username"
                label="作者"
                width="180">
                </el-table-column>
                <el-table-column
                prop="type.catetory"
                label="新闻分类"
                width="180">
                </el-table-column>
                <el-table-column
                prop="title"
                label="新闻标题">
                </el-table-column>
                <el-table-column
                prop="looknum"
                label="阅读量">
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
                    layout="prev, pager, next"
                     @current-change="handleCurrentChange"
                    :current-page="formData.pn"
                     :page-size="formData.size"
                    :total="count">
                </el-pagination>
            </div>

        </template>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableData:[],
                formData:{
                    pn:1,
                    size:4
                },
                count:0
            }
        },
        methods:{
            getnewslist(){
                this.$axios.get('/newsList',{pn:this.formData.pn,size:this.formData.size}).then(res=>{
                    console.log(res)
                    this.tableData=res.data
                    this.count=res.count
                })
            },
            handleCurrentChange(val) {
                this.formData.pn=val
                this.getnewslist()
            },
            handleClick(id){
                this.$axios.delete(`/new/${id}`).then(res=>{
                    if(res.code==200){
                        this.$message.success(res.msg)
                        this.getnewslist()
                    }else{
                         this.$message.error(res.msg)
                    }
                })
            }
        },
        created(){
            this.getnewslist()
        }
    }
</script>

<style scoped lang="scss">
.wrap{
    // margin:50px 200px;
}
</style>