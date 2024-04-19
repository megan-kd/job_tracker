import React from 'react'
import { Card, Empty, Space, Typography } from 'antd'
import { responseTimeTestData } from '../../constants';

const AverageResponseTimeCard = () => {
    const testData = responseTimeTestData;

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
                    alignContent: 'center',
                    textAlign: 'center',
                    minHeight: '320px'
                }}
                title={ <Typography.Title style={{fontFamily: 'Glitch Goblin'}} level={3}>Average Response Time</Typography.Title>}
            >
               <Empty
                description={
                    <Typography.Title style={{fontFamily: 'Glitch Goblin'}} level={1}>{getAvgResponse()} Days</Typography.Title>
                }
               />
            </Card>
        </>
    )
}

export default AverageResponseTimeCard