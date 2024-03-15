import { Space, Button, Divider, Typography } from 'antd'
import React from 'react'

const TitleBar = () => {
    const titleBarStyle = {
        width: "100%"
    }

    const dividerStyle = {
        width: "100%",
        backgroundColor: 'lime'
    }

    const titleStyle = {
        fontFamily: 'Glitch Goblin',
        color: 'lime',
    }
    return (
        <>
            <Space direction='vertical' style={titleBarStyle} align='center'>
                <Typography.Title style={titleStyle} level={1}>Megan's 2024 Job Tracker</Typography.Title>
                <Space direction='horizontal'>
                    <Button>Placeholder for more buttons</Button>
                </Space>
            </Space>
            <Divider style={dividerStyle}/>
        </>
    )
}

export default TitleBar