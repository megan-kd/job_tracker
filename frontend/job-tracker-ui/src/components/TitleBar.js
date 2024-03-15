import { Space, Button, Divider } from 'antd'
import React from 'react'

const TitleBar = () => {
    const titleBarStyle = {
        width: "100%"
    }

    const dividerStyle = {
        backgroundColor: "white",
        width: "100%"
    }

    const titleStyle = {
        fontFamily: 'Glitch Goblin'
    }
    return (
        <>
            <Space direction='vertical' style={titleBarStyle}>
                <div style={titleStyle}>Megan's 2023 Job Tracker</div>
                <Space direction='horizontal'>
                    <Button />
                </Space>
                <Divider style={dividerStyle}/>
            </Space>
        </>
    )
}

export default TitleBar