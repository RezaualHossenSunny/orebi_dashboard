import { Button, Input, Modal, Select, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';

const AprroveSubcatagorystatus = () => {

  const [staus,setSatus]=useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [catgory ,Setcatagory] =useState('')

  const showModal = (item) => {
    Setcatagory(item.name);
    
    setIsModalOpen(true);
  };

  const handleOk = () => {

    const daat = axios.post('http://localhost:3000/api/v1/catagory/subcatagorystatus',{
      name:catgory, 
      status :staus
    })



    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };





  const [getallCatagorys,SetAllCatagory]=useState([]);

    useEffect(() => {
      
       
          
        async function getAllcatagory() {
          let data = await axios.get('http://localhost:3000/api/v1/catagory/getAllsubcatagory')
          SetAllCatagory(data.data);
        }
        getAllcatagory()
      }, [catgory])
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
            
              <Button type="primary" onClick={()=> showModal(record)}>
              Edit Status
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
   <p>{catgory}</p>
  {/* <Input onChange={(e)=> setSatus(e.target.value)} placeholder='give the status'/>  */}

  <Select
    
      style={{
        width: 120,
      }}
      onChange={(e)=> setSatus(e)}
      // onChange={handleChange}
      options={[
        { value: 'aprove',label: 'aprove',},
        { value: 'wating',label: 'wating',},
        { value: 'reject',label: 'reject',},
       
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

export default AprroveSubcatagorystatus