import React from 'react';
import {Space} from 'antd'
import TitleBar from './TitleBar';

const MainPage = () => {
    const mainPageStyle = {
        backgroundColor: "#282c34",
        color: "white",
        width: "100%",
        fontFamily: "Summer Pixel"
    }
    return (
        <>
            <Space direction='vertical' style={mainPageStyle}>
                <TitleBar/>
                <div>Body</div>
            </Space>
        </>
    );
}

export default MainPage;