import React from 'react';
import {observer} from 'mobx-react-lite'
import {Tooltip} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import PortalMenu from "../PortalMenu.jsx";
import PortalLanguagesSelect from "../PortalLanguagesSelect.jsx";
import AccountMenu from "../AccountMenu.jsx";
import {useStore} from "../store/Context.js";

const AppHeader=()=>{
    const store = useStore();
    return (
        <header className="App-header">
            <Tooltip placement="bottom" title={store.t('help', 'Help')} className={'help-tooltip'}>
                <a href={'#'}><QuestionCircleOutlined /></a>
            </Tooltip>
            <PortalMenu/>
            <PortalLanguagesSelect/>
            <AccountMenu/>
        </header>
    )
}
export default observer(AppHeader)