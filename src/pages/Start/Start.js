import React from 'react';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import {
  Link
} from "react-router-dom";

const { Content } = Layout;


const Start = props => {

  return (
    <>
      <Content className="home">
        <span className="home-helper"></span>
        <Link to='/about'>
          <img src="https://i.imgur.com/rB5TRvL.png" alt="" className="home-logo" />
        </Link>
      </Content>
    </>
  )
}

export default Start