import React from 'react'
import {observer} from 'mobx-react-lite'
import HeaderMenu from "./PortalMenu.jsx";
import PortalLanguagesSelect from "./PortalLanguagesSelect.jsx";
import {useStore} from "./store/Context.js";
import axios from "axios";
import {Tooltip,Button} from "antd";
import {QuestionCircleOutlined} from '@ant-design/icons';
import PortalMenu from "./PortalMenu.jsx";
import AccountMenu from './AccountMenu.jsx'
import AppHeader from "./screenComponents/AppHeader.jsx";
import SideMenu from "./SideMenu.jsx";

const App2 = () => {

    const store = useStore()

    return (
        <div className="App">
            <AppHeader/>
            <SideMenu/>

            <body>
            <div>
                {store.t('Welcome to React')}
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
            </body>
        </div>
    )
}

export default observer(App2)