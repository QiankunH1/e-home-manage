import axios from 'axios'

const env = process.env.NODE_ENV
let baseURL = env=="developmrnt"?"/api":"/"

const instance = axios.create({
    baseURL:"/api",
    timeout:1500
})


const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.get(url,{params:data,...config}).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch(url,data,config,methods){
        return new Promise((resolve,reject)=>{
            instance[methods](url,data,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(url,data,config){
        return this.fetch(url,data,config,"post")
    },
    delete(url,data,config){
        return this.fetch(url,data,config,"delete")
    }
}

export default xhr