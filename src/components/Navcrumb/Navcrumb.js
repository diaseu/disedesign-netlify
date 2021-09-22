import React from 'react';
import 'antd/dist/antd.css'
import { Breadcrumb } from 'antd';

const Navcrumb = ({ page }) => {
  // const { collapsed } = this.state;

  return (
    <Breadcrumb style={{ margin: '16px' }}>
      <Breadcrumb.Item>DIA SEU</Breadcrumb.Item>
      <Breadcrumb.Item>{page}</Breadcrumb.Item>
    </Breadcrumb>
      )
}

export default Navcrumb