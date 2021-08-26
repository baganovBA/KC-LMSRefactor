import React, {useEffect, useState} from "react";
import {PieChart, Pie, Cell} from "recharts";
import {observer} from "mobx-react-lite";
import {useStore} from "./store/Context.js";



function Chart (){

    const store = useStore()
    const [isReady, setReady] = useState(false)

        useEffect(async ()=>{
            setReady(false)
             await store.LicenseUsers.loadData()
            setReady(true)
        },[])


    if(!isReady){
        <div>Loading</div>
    }

    const colors=[
        '#FFA07A','#FFD700','#20B2AA','#B8860B','#8FBC8F','#4682B4'
    ]


    return(
        <div className={"user_license_charts"}>
            <PieChart width={730} height={250}>
                <Pie data={store.LicenseUsers.data} cx="50%" cy="50%" outerRadius={80} label={'User Activity'}>
                    {
                        store.LicenseUsers.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} label={entry.name}/>
                        ))
                    }
                </Pie>
            </PieChart>
        </div>
            )
}

export default observer(Chart)