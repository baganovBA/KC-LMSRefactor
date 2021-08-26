import React, {useState} from 'react'
import {observer} from 'mobx-react-lite'
import HeaderMenu from "./PortalMenu.jsx";
import PortalLanguagesSelect from "./PortalLanguagesSelect.jsx";
import {useStore} from "./store/Context.js";
import axios from "axios";
import {Layout ,Tooltip,Button} from "antd";
import {LeftOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import PortalMenu from "./PortalMenu.jsx";
import AccountMenu from './AccountMenu.jsx'
import GetCookie from './GetCookie.js'
import AppHeader from "./screenComponents/AppHeader.jsx";
import SideMenu from "./SideMenu.jsx";
import {useTranslation} from "react-i18next";
import Chart from './Chart.js'

const App2 = () => {

    const store = useStore()
    const {Header,Content ,Footer,Sider} = Layout
    const [collapsed, setCollapsed] = useState(false)



    const collapseToggle = ()=>{
        console.log(GetCookie("i18next"));

        setCollapsed(!collapsed)

        console.log(collapsed)
    }

    const onSubmitForm = ()=>{
        const form = document.getElementById('login')

        form.onsubmit = async (e)=>{
            e.preventDefault()

            let res = await fetch('http://api.loc/v2/auth',{
                method: 'POST',
                body:new FormData(form)
            })
            try{

            let result = await res.json()
            console.log(result)
            localStorage.setItem('token',result.response.token )
            }catch(e){
                alert(e)
            }
        }

    }

    const {t,i18n} = useTranslation(['LMSPortalSettings',"LMSCurriculum"])

    return (
        <div className="App">

               <Layout>
                   <Header style={{
                       position: "sticky",
                       top: "0px", zIndex: 1, width: '100%',height:'50px',padding:0, background:0 }}><AppHeader/></Header>
                   <Layout hasSider={true}>
                       <Sider collapsed={collapsed} onCollapse={collapseToggle} style={{
                           overflow: 'auto',
                           height: '100vh',
                           position: 'sticky',
                           left: 0,
                           top:0
                       }}>
                           <SideMenu collapsed={collapsed}/>
                           <Button style={{
                               overflow: 'auto',
                               width:"200px",
                               position: 'fixed',
                               left: 0,
                               bottom:0
                           }} onClick={collapseToggle}><LeftOutlined/></Button>
                       </Sider>
                   <Layout>
                       <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                           <body style={{ padding: 24, minHeight: 1360 }}>
                                <div>
                                   {t('main_library_background')}
                               </div>
                                <div>
                                   {t('LMSCurriculum:day')}
                               </div>
                               <div>
                                   {store.t('add-group')}
                               </div>
                               <div>
                                   {store.t('slide_menu')}
                               </div>
                               <div>
                                   {store.t('email_confirmation_error')}
                               </div>

                                <form action="submit" id={'login'}>
                                    <input name={'username'} type="text"/>
                                    <input name={'password'} type="password"/>
                                    <input name={'portal_id'} type="text"/>
                                    <input name={'usertype'} type="text"/>
                                    <button onClick={onSubmitForm}>Login</button>
                                </form>

                           <Chart/>
                           </body>
                       </Content>
                   </Layout>
                   </Layout>
               </Layout>




               {/*<AppHeader/>*/}
               {/* <SideMenu/>*/}


        </div>
    )
}

export default observer(App2)