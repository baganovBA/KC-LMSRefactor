import {useState, useEffect} from "react";
import {Button, Dropdown, Menu, message} from "antd";
import {SettingOutlined, AuditOutlined, MenuOutlined, FormOutlined} from "@ant-design/icons"
import ReactLoading from 'react-loading';
import {observer} from "mobx-react-lite";
import {useStore} from "./store/Context.js";


function PortalMenu({}){

    const store = useStore()

    const menuItems =[
        {id:1, lable:"Portal Settings", icon:<AuditOutlined />},
        {id:2, lable:"Custom Field Settings", key:'additionProperties', icon:<MenuOutlined />},
        {id:3, lable:"Form Settings",key:'setting', icon:<FormOutlined />},
    ]

    const[isReady, setReady] = useState(false)
    const[lang, setLang] = useState('en')

    useEffect(async()=>{
        setReady(false)

        await store.muiIndex.loadTranslationsforIndex(lang)
        setReady(true)

    },[lang])

    const handleMenuItem=(e)=>{
        message.info(e.item.props.lable);
    }


    if(!isReady){

        return(  <div className={'settingsButton'}>
            <ReactLoading type={"balls"} color={"#f99f47"} height={'20px'} width={'20px'} />
        </div>)
    }
    return(
        <div className={'settingsButton'}>
            <Dropdown overlay={
                <Menu onClick={handleMenuItem}>

                    {menuItems.map(item=> <Menu.Item key={item.id} icon={item.icon} lable={item.lable}>
                         {store.t(item.key,item.lable)}
                    </Menu.Item>)}

                </Menu>
            }>
                <SettingOutlined />

            </Dropdown>

        </div>

    )

}

export default observer(PortalMenu)