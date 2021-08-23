import React from 'react';
import {makeAutoObservable} from "mobx";
import PortalLangs from "./PortalLangs.js";
import MuiIndex from "./muiIndex.js";


class Store {

    constructor(){
        return(async()=>{
            this.portalLangs = await new PortalLangs(this)
            this.muiIndex =  await new MuiIndex(this);
            return this
        })()
    }

    t(key,defaultProp = '???'){
        // console.log(this.portalLangs.selectedLang)
       const resp =  this.muiIndex.translations.find(el=> (el.key === key && el.lang === this.portalLangs.selectedLang.id))
        return resp? resp.value: defaultProp
    }


}
export default Store