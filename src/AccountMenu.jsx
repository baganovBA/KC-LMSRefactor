import React from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "./store/Context.js";
import ReactLoading from "react-loading";
import {Button, Dropdown, Menu, message} from "antd";
import {DownOutlined, UserOutlined,LogoutOutlined} from "@ant-design/icons";


function AccountMenu(){
    const store = useStore();

    const accountMenu =[
        {id:12, lable:'Account settings', key:'accountSettings', danger:'', icon: <UserOutlined />},
        {id:13, lable:'Log out', key:'log_out', danger:"danger", icon: <LogoutOutlined /> }
    ]

    const HandleMenuClick =(e)=>{
        message.info(e.domEvent.target.innerText)
        // console.log(e.domEvent.target.innerText)

    }


    // if(!store.muiIndex.muiIsReady()){
    //     return(<ReactLoading type={"balls"} color={"#f99f47"} height={'20px'} width={'20px'} />)
    // }

    return (
        <div className={'account_menu'}>
            <Dropdown overlay={ store.muiIndex.muiIsReady() ? <Menu onClick={HandleMenuClick}>
                    {accountMenu.map(el=>
                       <Menu.Item key={el.id} danger={el.danger}  icon={el.icon}>
                           {store.t(el.key)}
                        </Menu.Item>
                    )}

            </Menu>: <ReactLoading type={"balls"} color={"#f99f47"} height={'20px'} width={'20px'} />}>

                <Button>
                    <UserOutlined /> Timur Khubaev <DownOutlined />
                </Button>


            </Dropdown>
        </div>
    )

}
export default observer(AccountMenu)