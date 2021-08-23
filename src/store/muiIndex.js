import {makeAutoObservable} from "mobx";

export default class MuiIndex{
    translations = [];
    loaded = [];
    isReady = false;

    constructor(){
        makeAutoObservable(this)
    }

    async loadTranslationsforIndex (lang){
       let url = [
           'https://api.kcexp.pro/v2/mui/?lang='+lang+'&code=all&groups%5B%5D=LMSErrors&groups%5B%5D=LMSLayout&groups%5B%5D=LMSPage&token=6c88b191783fc5979352dad06ba000b1',
           'https://api.kcexp.pro/v2/mui/?lang='+lang+'&code=all&groups%5B%5D=LMSPortalSettings&groups%5B%5D=LMSFormsSettings&token=6c88b191783fc5979352dad06ba000b1'
       ]

        this.isReady = false;
        const tmp = [];
        for(let i in url){
            if (this.loaded.findIndex(item => url[i] === item) === -1) {
                const result = await fetch(url[i]);
                const json = await result.json()
                tmp.push(...json.response)
                this.loaded = [...this.loaded, url[i]]
            }
        }
        if (tmp.length) {
            this.translations.push(...tmp)
        }
        this.isReady = true;
    }

    muiIsReady(){
        return this.isReady
    }
}