import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserDatlis = () => {
   const [userinfo, Setuseinfo]=useState([]);
    useEffect(() => {  
        async function AllUser() {
          let data = await axios.get('http://localhost:3000/api/v1/authtication/allusers')
          Setuseinfo(data.data);
        }
        AllUser()
      }, [userinfo])
    
      
      const columns = [
        {
          title: 'First name',
          dataIndex: 'firstname',
          key: 'firstname',
        },
        {
          title: 'last Name',
          dataIndex: 'lastname',
          key: 'lastname',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
            title: 'Telephone',
            dataIndex: 'telephone',
            key: 'telephone',
          },
      ];
  return (
    <>
    <Table dataSource={userinfo}  columns={columns} />;
    </>
  )
}

export default UserDatlis