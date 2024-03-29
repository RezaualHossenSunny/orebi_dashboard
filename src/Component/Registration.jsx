
import React, { useState } from 'react';

import {
  Alert,
  Button,

  Form,
  Input,

} from 'antd';
import Card from 'antd/es/card/Card';
import axios from 'axios';


const Registration = () => {
  const [eror,Seteror]=useState('');
  const [sucess,Setsucess]=useState('');

    const [registrationData,setregistriondsata]=useState({
      firstname:'',
      lastname:'',
      email:'',
      telephone:'',
      password:''

    });
  
    const handleChange=(e)=>{
      setregistriondsata({
        ...registrationData,[e.target.name]:e.target.value
      })
    }




    const handlesubmit =async ()=>{
      const data =await axios.post("http://localhost:3000/api/v1/authtication/restratison",{
        firstname:registrationData.firstname,
        lastname:registrationData.lastname,
        email:registrationData.email,
        telephone:registrationData.telephone,
        password:registrationData.password
      })
   console.log(data.data);
     

        if(data.data.error){
          Seteror(data.data.error);
      
          set
        } else{
          Setsucess(data.data.success);
          Seteror('')
        }
    }
  return (
    <>
        <Card
      title="Registration"
 
      style={{
        width: 600,
        margin:"auto"
      }}
      
    >
    {
      eror &&
      
      <Alert message={eror} type="error" showIcon />
    },
    {
      sucess &&
      <Alert message={sucess} type="success" showIcon />
    }

<Form
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      layout="vertical"
      style={{
        maxWidth: 600,
      
      }}
    >
      
      
      <Form.Item  label="First Name:">
        <Input name='firstname' onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Last Name:">
        <Input name='lastname' onChange={handleChange}/>
      </Form.Item>


      <Form.Item label="Email:">
        <Input  name='email' onChange={handleChange}/>
      </Form.Item>

      <Form.Item label="Telephone:">
        <Input name='telephone' onChange={handleChange}/>
      </Form.Item>

      <Form.Item label="Password:">
        <Input name='password' onChange={handleChange}/>
      </Form.Item>


      <Form.Item>
        <Button onClick={handlesubmit} type='primary'>Sign Up </Button>
      </Form.Item>
     
     

    
      
    </Form>
    </Card>
   
    
  </>
  )
}

export default Registration