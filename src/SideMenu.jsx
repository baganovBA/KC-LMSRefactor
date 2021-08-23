import React from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "./store/Context.js";

const SideMenu =()=>{

    const store = useStore()


    return(
        <div>
            Jopa
        </div>
    )

}
export default observer(SideMenu)