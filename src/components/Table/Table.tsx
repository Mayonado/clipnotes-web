import React, { useState } from 'react';
import { Form, Switch, Radio, Table as AntdTable } from 'antd';

interface TableProps {
  columns: Array<any>;
  data: Array<any>;
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <AntdTable
      columns={columns}
      expandable={{
        expandedRowRender: record => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
        rowExpandable: record => record.name !== 'Not Expandable',
      }}
      dataSource={data}
    />
  );
};
export default Table;
