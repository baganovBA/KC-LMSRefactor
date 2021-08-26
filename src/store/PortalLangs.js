import {makeAutoObservable, makeObservable} from 'mobx';
import GetCookie from '../GetCookie.js'
import axios from "axios";

export default class PortalLangs {
    langs = []
    renderLangs=[]
    selectedLang=[]

    constructor(){
        makeAutoObservable(this)
    }

    loadPortalLangs(){
        const url = "http://api.loc/v2/portals/5b6e9529-e1f4-4360-b13a-c8803822ccdb/langs"
        axios.get(url).then((res)=>{
           this.langs = [...res.data.response]
            this.selectLang('en')
        })
    }

    selectLang(id){
        this.renderLangs = this.langs.filter((lang)=>lang.id !== id)
        this.selectedLang = this.langs.filter((lang)=>lang.id === id)[0]
    }

    deleteLang(id){
       this.langs = this.langs.filter((lang)=> lang.id !== id)
    }

}