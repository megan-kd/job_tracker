import React from 'react';
import {Space} from 'antd'
import TitleBar from './TitleBar';
import ChartGrid from './ChartGrid';

const MainPage = () => {
    const mainPageStyle = {
        backgroundColor: "#282c34",
        width: "100%",
        fontFamily: "Summer Pixel"
    }
    return (
        <>
            <Space direction='vertical' style={mainPageStyle}>
                <TitleBar/>
                <ChartGrid/>
            </Space>
        </>
    );
}

export default MainPage;