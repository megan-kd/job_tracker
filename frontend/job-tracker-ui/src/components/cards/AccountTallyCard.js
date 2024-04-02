import React from 'react'
import { Carousel, Card } from 'antd';

const testData = {
    "data": {
        "SuccessFactors": 1,
        "UKGPRO": 5,
        "Workday": 19,
        "iCIMS": 6
    }
}

const AccountTallyCard = () => {
    const totalAccounts = testData["data"]["SuccessFactors"] + testData["data"]["UKGPRO"] + testData["data"]["Workday"] + testData["data"]["iCIMS"];
    const titleStyle = {
        margin: 0,
        fontSize: '2.5em',
        color: 'black',
        textAlign: 'center',
        background: '#9EF01A',
        fontFamily: 'Glitch Goblin'
    };
    const contentStyle = {
        margin: 0,
        color: 'black',
        height: '70%',
        textAlign: 'center',
        background: '#9EF01A',
        fontSize: '5em',
    };
    const getAccountDataComponents = () => {
        return (
            Object.keys(testData["data"]).map((key) => {
                return <>
                    <div>
                        <h1 style={titleStyle}>{key}</h1>
                        <h2 style={contentStyle}>{testData["data"][key]}</h2>
                    </div>
                </>
            })
        )
    }
    return (
        <Card
            style={{
                background: "#9EF01A"
            }}
        >
            <Carousel autoplay>
                <div>
                    <h3 style={titleStyle}>Human Capital Managment Software Accounts Made . . .</h3>
                </div>
                {getAccountDataComponents()}
                <div>
                    <h1 style={titleStyle}>Total Accounts Made:</h1>
                    <h2 style={contentStyle}>{totalAccounts}</h2>
                </div>
            </Carousel>
        </Card>
    );
}

export default AccountTallyCard;