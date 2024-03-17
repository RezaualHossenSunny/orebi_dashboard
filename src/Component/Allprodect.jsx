import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Space, Table, Tag } from 'antd';
// import Allprodect from './Allprodect';


const Allprodect = () => {
  const [procdatData,SetprodactData]=useState([]);
    useEffect(()=>{
 async function Allprodects(){
  let data= await  axios.get('http://localhost:3000/api/v1/producat/getproducat')
  SetprodactData(data.data);
  }
  Allprodects()
    },[])

 const handledelate =(id)=>{
  console.log('del', id);
 }

    const columns = [

      {
        title: 'Serial No',
        dataIndex: 'index',
        key: 'index',
        render: (_, record,index) => 
       {return index +1 }
         
      },
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
        dataIndex: 'Storename',
        key: 'Storename',
        render: (_, record) => (
          <p>{record.store.storename}</p>
         ),
      },
      
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
           <Button type='primary'>Eidt</Button>
            <Button onClick={()=>handledelate(record. _id)} type='primary' danger>Delete </Button>
          </Space>
        ),
      },
    ];
  return (
    <div>
        <Table columns={columns} dataSource={procdatData} />
    </div>
  )
}

export default Allprodect