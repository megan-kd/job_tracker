import React, { useState } from 'react';
import { Card, Col, Row, Switch, Space } from 'antd';
import AppStatusPie from './graphs/AppStatusPie';
import { RESPONSE_OPTION, STATUS_OPTION } from '../constants';
import TableColumnCard from './cards/TableColumnCard';

// Card for AVG RESPONSE TIME
// Card for Table of Companies and their response times (split by rejection, current) sort by  time asc, desc, search by company name
// Card for number of workday (etc) accounts made to reply (total number of accounts made, then a total for each type)
//
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
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify='space-around' align={'top'}>
        <Col span={9}>
          <Card
            title={'Application Status and Response'}
            tabList={appStatusRespTabs}
            activeTabKey={activeStatusRespTabKey}
            onTabChange={onStatusRespTabChange}
          >
            <Switch defaultChecked={false} onChange={appStatusRespSwitchOnChange} checkedChildren="Percent" unCheckedChildren="Value" />
            <AppStatusPie dataset={activeStatusRespTabKey} data={appStatusRespData} isPercent={appStatusRespSwitch} />
          </Card>
        </Col>
        <Col span={15}>
          <TableColumnCard/>
        </Col>
      </Row>
    </>
  );
}

export default ChartGrid;