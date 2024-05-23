import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';

const Catagorystatus = () => {

  const [getallCatagorys,SetAllCatagory]=useState([])

    useEffect(() => {
      
       
          
        async function getAllcatagory() {
          let data = await axios.get('http://localhost:3000/api/v1/catagory/getallcatagory')
          SetAllCatagory(data.data);
        }
        getAllcatagory()
      }, [])
      console.log(getallCatagorys);





      
      const columns = [
        {
          title: 'Catagory Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'isActive',
          dataIndex: 'isActive',
          key: 'isActive',
          render :(_,record)=>
           <p>{record.isActive ?"Active" :"Inactive"}</p>
          
        },
        {
          title: 'status',
          dataIndex: 'status',
          key: 'status',
        },
      ];
  return (
    <>
<Table dataSource={getallCatagorys} columns={columns} />;
    </>
    
  )
}

export default Catagorystatus