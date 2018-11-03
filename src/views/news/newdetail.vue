<template>
    <div>
        <div  v-html="formdata.content"></div>
        <div>{{formdata.created_at}}</div>
        <div v-if="formdata.author">{{formdata.author.username}}</div>
        <!-- <div>{{formdata.author.username}}</div> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                formdata:""
            }
        },
        //params用法
        methods:{
            getnewdetail(){
                let id = this.$route.params.id
                console.log(id)
                this.$axios.get(`/new/${id}`).then(res=>{
                    console.log(res)
                    this.formdata=res.data
                })
            }
        },
        //query用法
        // methods:{
        //     getnewdetail(){
        //         let id = this.$route.params.id
        //         console.log(id)
        //         this.$axios.get("/new",{id}).then(res=>{
        //             console.log(res)
        //         })
        //     }
        // },
        created(){
           this.getnewdetail() 
        }
    }
</script>

<style scoped>

</style>