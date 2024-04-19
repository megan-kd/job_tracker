import React from 'react';
import { Row, Col, Card } from 'antd';
import AccountTallyCard from './AccountTallyCard';
import AverageResponseTimeCard from './AverageResponseTimeCard';
import ApplicationTable from '../ApplicationTable';


const TableColumnCard = () => {
    return (
        <>
            <Row gutter={[16, 16]} justify={'space-around'}>
                <Col span={11}>
                    <AccountTallyCard />
                </Col>
                <Col span={12}>
                    <AverageResponseTimeCard />
                </Col>
            </Row>
            <Row gutter={[16, 16]} justify={'space-around'}>
                <Col span={23}>
                    <ApplicationTable />
                </Col>
            </Row>
        </>
    )
}

export default TableColumnCard;