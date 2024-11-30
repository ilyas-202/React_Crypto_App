import { Button, Layout, Select, Space , Modal, Drawer } from 'antd';
import { useCripto } from '../../context/crypto-context';
import { useEffect, useState } from 'react';
import CoinInfoModal from '../CryptoInfoModal';
import AddAssetForm from '../AddAssetForm';

const headerStyle = {
    with: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    // background: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  };


export default function AppHeader() {
  const [select, setSelect] = useState(false)
  const [coin, setCoin] = useState(null)
  const [modal, setModal] = useState(false)
  const [drawer, setDraver] = useState(false)
  const { crypto } = useCripto()

  useEffect(() => {
    const keypress = e => {
      if (e.key === '/') {
        setSelect((prev) => !prev)
      }
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  }, [])


  function handleSelect(value) {
    setCoin(crypto.find((c) => c.id === value))
    setModal(true)
  }


    return <Layout.Header style={headerStyle}>
        <Select
          onSelect={handleSelect}
          style={{ width: 250, }}
          open={select}
          onClick={() => setSelect((prev) => !prev)}
          value='press / to open'
          options={crypto.map(coin => ({
            label: coin.name,
            value: coin.id,
            icon: coin.icon,
          }))}
          optionRender={(option) => (
            <Space>
              <img style={{width: 20}} src={option.data.icon} alt={option.data.label}/>{' '} {option.data.label}
            </Space>
          )}
        />

        <Button type="primary" onClick={() => setDraver(true)}>Add Asset</Button>

        <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
          <CoinInfoModal coin={coin} />
        </Modal>

        <Drawer 
          width={600} 
          title="Basic Drawer" 
          onClose={() => setDraver(false)} 
          open={drawer}
          destroyOnClose
        >
          <AddAssetForm onClose={() => setDraver(false)}/>
        </Drawer>

    </Layout.Header>

}