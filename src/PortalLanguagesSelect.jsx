import React, {useEffect, useState} from "react";
import { Menu, Dropdown, Button, message, Space } from 'antd';
import {observer} from 'mobx-react-lite';
import { DownOutlined, UserOutlined,GlobalOutlined,LineOutlined } from '@ant-design/icons';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import i18next from "i18next";
import 'antd/dist/antd.css';
import {useStore} from "./store/Context.js";


function PortalLanguagesSelect ({}){

    const store = useStore()

    const area = 'langs'

    const { promiseInProgress } = usePromiseTracker({ area });

    const [count, setCount] = useState(0)
    const [portalLangs, setPortalLangs] = useState(false)
    const [isReady, setIsReady] = useState(false)


    function getPortalLangs(){

    }

    useEffect(async ()=>{
         await store.portalLangs.loadPortalLangs();
         setIsReady(true)
        }
    , [])





    function handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
    }

    async function handleMenuClick(e) {
        await store.muiIndex.loadTranslationsforIndex(e.key)
        store.portalLangs.selectLang(e.key)
        i18next.changeLanguage(e.key)
        message.info('Click on menu item.');
        console.log('click', e);
    }



         if(!isReady){
             return <div>.......loading</div>
         }
    return (

        <div className={"portal-langs"}>
            {!store.portalLangs.renderLangs ?
                <div>pleaseWAIT</div> :
                (<Dropdown overlay={ <Menu onClick={(e)=>handleMenuClick(e)}>

                    {store.portalLangs.renderLangs.map((lang)=>{
                            return( <Menu.Item key={lang.id} >
                                {lang.native} <span className={'portal-langs__lang-name'}>({lang.name})</span>
                            </Menu.Item>)
                        })
                    }
                </Menu>} trigger={"click"}>
                    <Button>
                        <GlobalOutlined style={{color:'#74838A'}} /> <LineOutlined  style={{color:'#74838A'}}  rotate={90} />{store.portalLangs.selectedLang ? store.portalLangs.selectedLang.native : 'Lang'} <DownOutlined />
                    </Button>
                </Dropdown>)
            }
        </div>
    )
}

export default observer(PortalLanguagesSelect)