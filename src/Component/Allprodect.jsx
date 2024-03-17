import React, { useEffect } from 'react'
import axios from 'axios';
import { Button, Space, Table, Tag } from 'antd';
// import Allprodect from './Allprodect';
const columns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
   
  },
  {
    title: 'Image',
    dataIndex: 'Image',
    key: 'Image',
    render: (_, record) => (
       <img style={{ width:'100px' }} src='https://istockbd.com/cdn/shop/products/iPhone-14-Pro-Deep-Purple-Price-in-Bangladesh.png?v=1663330585&width=600' alt='Iphone'></img>
      ),
    
  },
  {
    title: 'Store Name',
    dataIndex: 'Store',
    key: 'Store',
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
       <Button type='primary'>Eidt</Button>
        <Button type='primary' danger>Delete</Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const Allprodect = () => {
    useEffect(()=>{
 async function Allprodects(){
  let data= await  axios.get('http://localhost:3000/api/v1/producat/getproducat')
  console.log(data, 'data');
  }
  Allprodects()
    },[])
  return (
    <div>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Allprodect