import { Button, Input } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'

const Addcatagory = () => {
    const [catagoryname ,Setcatagoryname]=useState('');
    const [catagoryDescription,SetcatagorDescription]=useState('');
    const  handlevatagory = ()=>{
        
    
        let data = axios.post('http://localhost:3000/api/v1/catagory/createcatagory',{
          name:catagoryname,
          description:catagoryDescription,
          
        })
        console.log(data);
    }
    return (
        <div>

            <h1> Catagory Name:</h1>
            <Input onChange={(e) => Setcatagoryname(e.target.value)} placeholder="catagoryname" />


            
            <h1> Catagory Description:</h1>
            <Input onChange={(e) => SetcatagorDescription(e.target.value)} placeholder="catagoryDescription" />

            <br/>
            <br/>
            <Button onClick={handlevatagory} type='primary'>catagory Upload</Button>




        </div>
    )
}

export default Addcatagory