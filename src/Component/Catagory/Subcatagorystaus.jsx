import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';

const Subcatagorystaus = () => {

  const [subgetallCatagorys,SetAllsubCatagory]=useState([])

    useEffect(() => {
      
       
          
        async function getAllsubcatagory() {
          let data = await axios.get('http://localhost:3000/api/v1/catagory/getAllsubcatagory')
          SetAllsubCatagory(data.data);
        }
        getAllsubcatagory()
      }, [])
      console.log(subgetallCatagorys);





      
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
<Table dataSource={subgetallCatagorys} columns={columns} />;
    </>
    
  )
}

export default Subcatagorystaus