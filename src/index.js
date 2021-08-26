import React from 'react';
import ReactDOM from 'react-dom';
// import mainStore from './stores/mainStore'
// import optionsStore from './stores/optionsStore'
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';

import './index.css';
import App from './App.jsx';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "en",
        detection:{
            order: ['path','cookie', 'htmlTag','localStorage', 'sessionStorage', 'navigator', 'querystring', 'subdomain'],
            caches: ['cookie']
        },
        backend:{
            loadPath:"http://api.loc/v2/mui/?lang={{lng}}&code=all&groups%5B%5D={{ns}}",
            addPath:"http://api.loc/v2/mui/?lang={{en}}&code=all&groups%5B%5D={{ns}}&token=50fa6243b321204d054dd8f525bd37ec",
            parse: function (data){
                data = JSON.parse(data)
                let translateObj ={};
                data.response.forEach((el)=>{
                    if(!translateObj.hasOwnProperty(el.key)){
                        translateObj[el.key] = el.value
                    }
                })
               return data = translateObj
            }
        },
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        react:{useSuspense:false}
    });



ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
