import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';
import styles from './App.module.scss'
import { Button, Space, Radio, ConfigProvider } from 'antd';

const App: React.FC = () => {
  const [position, setPosition] = useState<'encode' | 'decode'>('encode');
  const Toptab = ['encode', 'decode']
  return (
    <ConfigProvider

      theme={{
        components: {
        },
        token: {
          borderRadius: 0
        }
      }}>
      <Radio.Group value={position} onChange={(e) => setPosition(e.target.value)}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '320px'}}>
          {Toptab.map(item => (
            <Radio.Button key={item} value={item} style={{ flex: 1 ,textAlign: 'center' }}>
              {item}
            </Radio.Button>))}
        </div>
      </Radio.Group>
    </ConfigProvider>
  )
}
export default App;
