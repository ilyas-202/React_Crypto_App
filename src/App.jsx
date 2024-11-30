import AppLayout from './components/layout/AppLayaut';
import { CryptoContextProvider } from './context/crypto-context';


const App = () => {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  )
};

export default App
