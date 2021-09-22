import React from 'react';
import 'antd/dist/antd.css'
import { Row, Col, Typography } from 'antd';
import { Navcrumb } from '../../components'

const { Title } = Typography;

const project0 = ({ project }) => {

  return (
    <>
      {/* <Typography><Title className="line">ZAP App</Title></Typography> */}
      <Row>
        <Col span={24}>
          <h2 className="text">{project.blurb}</h2>
        </Col>
        <Col span={24}>
          
          <p>{project.description}
            </p>
            <h2 className="skills">Technologies Used:</h2>
            <p>
              <ul className="skills">
              {project.technology.map((tech) => (
                <li className="skills">{tech}</li>
              ))}
              </ul>
            </p>

        </Col>
      </Row>
    </>
  )
}

export default project0