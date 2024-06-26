import React, { useEffect } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined,UserAddOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Home = () => {

   
const data = useSelector(state => state.userInfo.userInfo)
console.log(data);

const navigate =useNavigate()

  useEffect(()=>{
    if(!data){
      navigate('/login')
    }
  },[])


    const onClick = (e) => {
      navigate( e.key);
      };
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
       data?.role == "admin" &&
        getItem('User', 'sub1', <UserAddOutlined />, [
          getItem('Mercent', '/login'),
          getItem('Users', '/user'),
      
        ]),
        getItem('Product', 'sub2', <AppstoreOutlined />, [
          getItem('Add Product', '/addprodacet'),
          getItem('All Producat', '/allproducat'),
          getItem('All Variant', '/allvariant'),
      
        ]),
        {
          type: 'divider',
        },
      
        getItem('Catagory', 'sub3', <AppstoreOutlined />, [
          getItem('Add Catagory', '/addcatagory'),
          getItem('All Catagory', '6'),
      
        ]),
        {
          type: 'divider',
        },
      
        getItem('SubCatagory', 'sub4', <AppstoreOutlined />, [
          getItem('Add SubCatagory', '/addsubcatgory'),
          getItem('All SubCatagory', '8'),
      
        ]),
        {
          type: 'divider',
        },

        getItem('Approve Status', 'sub5', <AppstoreOutlined />, [
          getItem('Catagory Status', '/catagorystatus'),
          getItem('SubCatagory Status', '/subcatagorystatus'),
      
        ]),
        {
          type: 'divider',
        },
        data?.role == "admin" &&
        getItem('Approve ', 'sub6', <AppstoreOutlined />, [
          getItem('Approve Catagory Status', '/approvecatagorystatus'),
          getItem('Approve SubCatagory Status', '/approvesubcatagorystatus'),
      
        ]),
        {
          type: 'divider',
        },
      
      
      ];
  return (

   

        <Row>
      <Col span={8}>
      <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      mode="inline"
      items={items}
    />
      </Col>
      <Col span={16}>
        <Outlet/>
      </Col>
    </Row>
  
  )
}

export default Home