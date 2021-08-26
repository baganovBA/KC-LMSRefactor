import {makeAutoObservable} from "mobx";
import axios from "axios";


export default class LicenseUsers{

    data=[];

    constructor(){
        makeAutoObservable(this)
    }

    loadData(){
        let token = localStorage.getItem("token")
        const url = "http://api.loc/v2/accounts/3dc9ef63-3689-494d-8399-233e49b1325b/statistics/graphics/students/?token="+token
        axios.get(url).then((res)=>{
            const data = res.data.response
            let result=[]
            for(let key in data){
                let obj={}
                obj.name = key;
                obj.value = data[key]
                result.push(obj)
            }
            this.data = result
        })
    }
}