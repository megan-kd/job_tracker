import MainPage from './components/MainPage';
import { ConfigProvider} from 'antd';
import './fonts.css'

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            fontFamily: 'Summer Pixel',
            // Alias Token
          }
        }}
      >
        <MainPage />
      </ConfigProvider>
    </>
  );
}

export default App;
