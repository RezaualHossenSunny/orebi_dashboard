import { Button, Input, Modal, Select, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';

const Approvecatagorystatus = () => {

  const [staus,setSatus]=useState('')
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log(staus);
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
 
  <Input onChange={(e)=> setSatus(e.target.value)} placeholder='give the status'/> 
  


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