import React from 'react';
import { Row, Col, Card } from 'antd';
import AccountTallyCard from './AccountTallyCard';
import AverageResponseTimeCard from './AverageResponseTimeCard';


const TableColumnCard = () => {
    return (
        <>
            <Row justify={'space-around'}>
                <Col span={11}>
                    <AccountTallyCard />
                </Col>
                <Col span={12}>
                    <AverageResponseTimeCard />
                </Col>
            </Row>
            <Row justify={'space-around'}>
                <Card/>
            </Row>
        </>
    )
}

export default TableColumnCard;