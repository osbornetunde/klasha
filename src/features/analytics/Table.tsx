import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Table as AntdTable } from 'antd';
import { StyledTable } from './styles';

const data = [
    {
        id: 0,
        payId: 'KLA12578DHQ',
        source: 'Vel pellentesque ornare',
        date: '25th November, 2020',
        amount: '$1,200',
    },
    {
        id: 1,
        payId: 'KLA12578DHQ',
        source: 'Vel pellentesque ornare',
        date: '25th November, 2020',
        amount: '$1,200',
    },
    { id: 2, payId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '25th November, 2020', amount: '$1,200' },
    {
        id: 3,
        payId: 'KLA12578DHQ',
        source: 'Vel pellentesque ornare',
        date: '25th November, 2020',
        amount: '$1,200',
    },
];

type balanceTableData = {
    id: number;
    payId: string;
    source: string;
    date: string;
    amount: string;
};

const columns: ColumnsType<balanceTableData> = [
    {
        title: 'PayID',
        dataIndex: 'payId',
        key: 'payId',
        fixed: true,
    },
    {
        title: 'Source',
        dataIndex: 'source',
        key: 'source',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
];

const Table = () => {
    return (
        <StyledTable>
            <AntdTable<balanceTableData>
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.id}
                pagination={false}
                scroll={{ x: 250 }}
            />
        </StyledTable>
    );
};

export default Table;
