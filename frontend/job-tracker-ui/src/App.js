import MainPage from './components/MainPage';
import { ConfigProvider, Typography } from 'antd';
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
          },
        }}
      >
        <MainPage />
        <Typography>Hello World</Typography>
      </ConfigProvider>
    </>
  );
}

export default App;
