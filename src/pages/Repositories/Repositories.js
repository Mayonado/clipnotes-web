import React from 'react';

// antd
import { Typography, Select, Row, Col } from 'antd';
const { Option } = Select;
const { Title } = Typography;

// hoc
import Layout from '../../hoc/Layout/Layout';

// components
import Table from '../../components/Table/Table';

const Repositories = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="page-header">
          <Title level={2} className="page-title">
            Repositories
          </Title>
          <div className="page-subtitle">
            Trending repositories listed on github
          </div>
        </div>
        <div className="page-content">
          <Row gutter={[16, 16]}>
            <Col span={5}>
              <div className="form-group">
                <Select
                  placeholder="Language"
                  listItemHeight={20}
                  listHeight={250}
                >
                  <Option value="male">PHP</Option>
                  <Option value="female">Javascript</Option>
                  <Option value="other">Python</Option>
                </Select>
              </div>
            </Col>
          </Row>
          <Table />
        </div>
      </div>
    </Layout>
  );
};

export default Repositories;
