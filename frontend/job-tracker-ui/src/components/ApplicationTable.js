import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Company',
        dataIndex: 'Company',
        key: 'Company',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Position Title',
        dataIndex: 'Position Title',
        key: 'Position Title',
    },
    {
        title: 'Date Applied',
        dataIndex: 'Date Applied',
        key: 'Date Applied',
    },
    {
        title: 'Response Time',
        dataIndex: 'Response Time',
        key: 'Response Time',
    },
    {
        title: 'Status',
        dataIndex: 'Status',
        key: 'Status',
        render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = 'green';
                if (tag === 'Active') {
                  color = 'cyan';
                }
                else if (tag === 'Job No Longer Exists') {
                    color = 'magenta';
                }
                else if (tag === 'Rejected') {
                    color = 'volcano';
                }
                else if (tag === 'Withdrawn') {
                    color = 'purple';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
    },

    
];


const ApplicationTable = () => {
    return (
        <>
            <Table columns={columns} />
        </>
    );
}

export default ApplicationTable;