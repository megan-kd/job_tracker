import React, { useState } from 'react';
import { Card, Col, Row, Switch } from 'antd';
import AppStatusPie from './graphs/AppStatusPie';
import { RESPONSE_OPTION, STATUS_OPTION } from '../constants';

const appStatusRespTabs = [
    {
        key: STATUS_OPTION,
        label: 'Status'
    },
    {
        key: RESPONSE_OPTION,
        label: 'Response'
    }
]

const testRespData = {
    "data": [
      {
        "type": "interviewed",
        "value": 7
      },
      {
        "type": "no interview",
        "value": 71
      },
      {
        "type": "ghosted",
        "value": 61
      }
    ]
  }
  const testStatusData = {
    "data": [
      {
        "type": "rejected",
        "value": 139
      },
      {
        "type": "waiting",
        "value": 44
      }
    ]
  }

const ChartGrid = () => {
    const [activeStatusRespTabKey, setActiveStatusRespTabKey] = useState(STATUS_OPTION);
    const [appStatusRespData, setAppStatusRespData] = useState(testStatusData);
    const [appStatusRespSwitch, setAppStatusRespSwitch] = useState(false);
    const onStatusRespTabChange = (key) => {
        setActiveStatusRespTabKey(key)
        setAppStatusRespData(key === STATUS_OPTION ? testStatusData : testRespData)
    }
    const appStatusRespSwitchOnChange = (checked) => {
        setAppStatusRespSwitch(checked)
    }
    return (
        <>
            <Row gutter={16}>
                <Col span={9}>
                    <Card
                        title={'Application Status and Response'}
                        tabList={appStatusRespTabs}
                        activeTabKey={activeStatusRespTabKey}
                        onTabChange={onStatusRespTabChange}
                    >
                        <Switch defaultChecked={false} onChange={appStatusRespSwitchOnChange} checkedChildren="Percent" unCheckedChildren="Value"/>
                        <AppStatusPie dataset={activeStatusRespTabKey} data={appStatusRespData} isPercent={appStatusRespSwitch}/>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default ChartGrid;