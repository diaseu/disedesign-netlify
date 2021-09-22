import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { Modal, Button, Typography } from 'antd';
import { Project0 } from '../../projects'
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const ModalComponent = ({ project }) => {

  const [visible, setVisible] = useState(false);

  return (
    <div key={project.id}>
      {/* <Button onClick={() => setVisible(true)}>Show Project {project.id}</Button> */}
      <a onClick={() => setVisible(true)}>
        <Title level={4}>
          {project.name}
        </Title>
        <img alt={project.name} src={project.img} style={{ width: '100%', margin: '0 0 2vh 0' }} />
        <Paragraph style={{ margin: '0 0 22px 0' }}>
          {project.blurb}
        </Paragraph>
      </a>
      <Modal
        title={project.name}
        // centered
        visible={visible}
        style={{ top: '10vh' }}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={[
          <a href={project.url}><Button key="site">
            See Live Site
          </Button></a>,
          <a href={project.git}><Button key="git">
            See Git Repo
          </Button></a>,
          <Button key="back" onClick={() => setVisible(false)}>
            Close
          </Button>,
        ]}
        >
        <img 
          alt={project.name} 
          src={project.img} 
          style={{ width: '100%', margin: '0 0 0vh 0' }}
          />
        {/* {project.description} */}
        <Project0 project={project} />

      </Modal>
    </div>
  )
}

export default ModalComponent