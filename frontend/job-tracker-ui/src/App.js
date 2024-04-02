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
          },
          components: {
            Card: {
              fontFamily: 'Ugly Byte',
              headerFontSize: 28
            },
            Tabs: {
              itemSelectedColor: "#007200",
              inkBarColor: "#007200",
              titleFontSizeLG: 20,
            },
            Switch: {
              colorPrimary: "black",
              colorPrimaryHover: "#006400",
              trackHeight: 24,
              fontFamily: 'Glitch Goblin',
            },
            Carousel: {
              colorBgContainer: '#007200'
            }
          }
        }}
      >
        <MainPage />
      </ConfigProvider>
    </>
  );
}

export default App;
