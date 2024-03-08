import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined,UserAddOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('User', 'sub1', <UserAddOutlined />, [
    getItem('Mercent', '/login'),
    getItem('Users', '2'),

  ]),
  getItem('Product', 'sub2', <AppstoreOutlined />, [
    getItem('Add Product', '3'),
    getItem('All Producat', '4'),

  ]),
  {
    type: 'divider',
  },

  getItem('Catagory', 'sub3', <AppstoreOutlined />, [
    getItem('Add Catagory', '5'),
    getItem('All Catagory', '6'),

  ]),
  {
    type: 'divider',
  },

  getItem('SubCatagory', 'sub4', <AppstoreOutlined />, [
    getItem('Add SubCatagory', '7'),
    getItem('All SubCatagory', '8'),

  ]),
  {
    type: 'divider',
  },


];
const Home = () => {
  const navigate =useNavigate()
    const onClick = (e) => {
      navigate( e.key);
      };
  return (

   

        <Row>
      <Col span={6}>
      <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      mode="inline"
      items={items}
    />
      </Col>
      <Col span={18}>
        <Outlet/>
      </Col>
    </Row>
  
  )
}

export default Home