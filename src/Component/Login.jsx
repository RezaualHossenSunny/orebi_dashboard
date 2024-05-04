import React, { useState } from 'react'
import Card from 'antd/es/card/Card';



import {
  Alert,
  Button,

  Form,
  Input,

} from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [eror,Seteror]=useState('');
  const [sucess,Setsucess]=useState('');

  const [loginData,setloginData]=useState({
   
    email:'',
    password:''

  });

const navigate=useNavigate();

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setloginData({...loginData,[name]:value})

  }

const handleSignin= async()=>{
  const data =await axios.post("http://localhost:3000/api/v1/authtication/login",{
  
    email:loginData.email,
    password:loginData.password
  })
  console.log(data);
  if(data.data.error){
    Seteror(data.data.error);

    
  } else{
    if(data.data.role=="member"){
      Seteror("this admin panel is for only admin && mercent")
    }else{
     
      Setsucess(data.data.success);
      Seteror('')
      setTimeout(() => {
        navigate('/')
      }, 2000);
    }
    
  }
}

  return (
    <div>
      <Card
        title="Login"

        style={{
          width: 600,
          margin: "auto"
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




          <Form.Item label="Email:">
            <Input name='email' onChange={handleChange} />
          </Form.Item>



          <Form.Item label="Password:">
            <Input name='password' onChange={handleChange} />
          </Form.Item>


          <Form.Item>
            <Button onClick={handleSignin} type='primary'>Login </Button>
          </Form.Item>





        </Form>
      </Card>
    </div>
  )
}

export default Login