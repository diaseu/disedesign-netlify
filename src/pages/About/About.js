import React from 'react';
import 'antd/dist/antd.css'
import { Row, Col, Typography } from 'antd';
import { Navcrumb } from '../../components'

const { Title } = Typography;

const About = props => {

  return (
    <>
      <Navcrumb page={props.page} />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Typography><Title className="line">Dia Seung</Title></Typography>
        <Row>
          <Col span={12}>
            <h2 className="text">Full-stack developer with an emphasis on front-end.<br />I believe in good design, hot coffee and the deity of cats. </h2>
          </Col>
          <Col span={12}>
            <Row>
              <p>I believe good design lies in the intersection of function and form -- good design underlines good user experience, good user experience underlines purpose. My goal is to create products that are useful, easy to use and pleasant to look at. I enjoy using my skill-set to empower people to accomplish their goals.

                My development stack is focused on design meets usability meets performance. My current technology of choice includes Node.js, React and MongoDB.
              </p>
              <h2 className="skills">Skills</h2>
              <p>
                <ul className="skills">
                  <li className="skills">Javascript</li>
                  <li className="skills">Node.JS</li>
                  <li className="skills">React.JS</li>
                  <li className="skills">MongoDB</li>
                  <li className="skills">MySQL</li>
                  <li className="skills">HTML</li>
                  <li className="skills">CSS</li>
                  <li className="skills">Git</li>
                </ul>
              </p>
            </Row>

          </Col>
        </Row>



      </div>
    </>
  )
}

export default About