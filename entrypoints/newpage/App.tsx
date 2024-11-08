import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';
import styles from './App.module.scss'
import { Button, theme,Space, Radio, ConfigProvider, Input, GetProps } from 'antd';
import Encode from '@/components/encode/Encode';
import Decode from '@/components/decode/Decode';
import { grey } from '@ant-design/colors';
const { useToken } = theme;
const App: React.FC = () => {
  const {token} = useToken();
  const [position, setPosition] = useState<'Encode' | 'Decode'>('Encode');
  const Toptab = ['Encode', 'Decode']
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
        <div style={{ display: 'flex', flexDirection: 'row', width: '360px' }}>
          {Toptab.map(item => (
            <Radio.Button key={item} value={item}  style={{ flex: 1, textAlign: 'center', transition: "all .3s ease",background: item === position ? token.colorPrimary : "#fff", color: item === position ? "#fff" : token.colorPrimary }}>
              {item}
            </Radio.Button>))}
        </div>
      </Radio.Group>
      <div className={styles.content_box}>
        {
          position === Toptab[1] ? <Decode/> : <Encode/>
        }
      </div>
    </ConfigProvider>
  )
}

export default App;
