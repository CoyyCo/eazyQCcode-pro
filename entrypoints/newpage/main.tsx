import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style.css';
// import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider, theme } from 'antd';
import {grey} from '@ant-design/colors'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      cssVar: true, 
      token:{
        colorPrimary:grey[4],
        // algorithm:true
      },
      
    }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
