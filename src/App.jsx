// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import PortalLanguagesSelect from './PortalLanguagesSelect.jsx'
import './App.css';
import HeaderMenu from "./PortalMenu.jsx";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import Store from "./store/Store.js";
import {StoreProvider} from "./store/Context.js";
import App2 from "./App2.jsx";


function App() {
    const [store, setStore] = useState()
    const [isReady , setIsReady] = useState(false)

    useEffect(async ()=>{
        setStore(await new Store())
        setIsReady(true)
    },[])


    if(!isReady){
        return (<div> ....LOading</div>)
    }

    return (
        <StoreProvider value={store}>
            <App2 />
        </StoreProvider>
    );
}

export default App;
