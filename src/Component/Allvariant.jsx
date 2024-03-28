import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Space, Table} from 'antd';
import { render } from 'react-dom';


const Allvariant = () => {
const [variants,setVariant]=useState([]);
useEffect(()=>{
    async function getallvariat(){
        const data = await axios.get("http://localhost:3000/api/v1/producat/allvariant");   
        setVariant(data.data);
     }
     getallvariat()
},[])
console.log('variant',variants);

  const columns = [
    {
      title: 'Serial No',
      dataIndex: 'index',
      key: 'index',
      render: (_, record, index) => { return index + 1 }

    },
    {
      title: 'Name',
      dataIndex: 'prodcat',
      key: 'prodcat',
      render: (_, record) => (
    console.log(record.name)
      ),
    },
    {
      title: 'image',
      dataIndex: 'image',
      key: 'image',
       render:(_, record)=>(
       
        <img style={{ width:'50px' }} src={record.image}/>
      )
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <Button type='primary'>Eidt</Button>

              <Button  danger>Delete </Button>
    
          </Space>
        ),
      },
  ];

    return (
      <>
           <Table dataSource={variants} columns={columns}  />
      </>
    )
}

export default Allvariant