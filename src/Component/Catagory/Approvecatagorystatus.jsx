import { Button, Input, Modal, Select, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';

const Approvecatagorystatus = () => {

  const [staus,setSatus]=useState('')
console.log(staus);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };





  const [getallCatagorys,SetAllCatagory]=useState([]);

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
        {

          title: 'Action',
          key: 'Action',
          render :(_,record)=>(
            <>
            
              <Button type="primary" onClick={showModal}>
              Edit Status
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Select
    labelInValue
    defaultValue={{ value: 'wating', label: 'wating' }}
    style={{ width: 120 }}
    onChange={(e)=> setSatus(e)}
    options={[
      {
        value: 'aprove',
        label: 'aprove',
      },
      {
        value: 'wating',
        label: 'wating',
      },

      {
        value: 'reject',
        label: 'reject',
      },
    ]}
  />
      </Modal>
            </>
          )
         

        },
      ];
  return (
    <>
<Table dataSource={getallCatagorys} columns={columns} />;
    </>
    
  )
}

export default Approvecatagorystatus