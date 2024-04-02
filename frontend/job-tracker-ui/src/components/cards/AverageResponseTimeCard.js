import React from 'react'
import { Card, Space } from 'antd'
import { responseTimeTestData } from '../../constants';

const AverageResponseTimeCard = () => {
    const testData = responseTimeTestData;
    const titleStyle = {
        margin: 0,
        fontSize: '3em',
        color: 'black',
        textAlign: 'center'
    };

    const contentStyle = {
        margin: 0,
        fontSize: '9em',
        color: 'black',
        textAlign: 'center'
    };

    const getAvgResponse = () => {
        var sum = 0
        testData["data"]["active"].forEach((app) => {
                sum += app['Response Time']
            }
        )

        return Math.round(sum / testData["data"]["active"].length);
    }


    return (
        <>
            <Card
                style={{
                    background: "#9DF264",
                    height: '320px',
                    alignContent: 'center',
                    textAlign: 'center'
                }}
            >
                <Space direction='vertical'>
                    <h1 style={titleStyle}>Average Response Time</h1>
                    <h2 style={contentStyle}>{getAvgResponse()} Days</h2>
                </Space>
            </Card>
        </>
    )
}

export default AverageResponseTimeCard