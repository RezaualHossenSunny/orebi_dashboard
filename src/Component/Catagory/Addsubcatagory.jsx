import { Button, Input } from 'antd'
import React, { useState } from 'react'

const Addsubcatagory = () => {
    const [subcatagoryname ,Setsubcatagoryname]=useState('');
    const [catagoryDescription,SetsubcatagorDescription]=useState('');
     
    const handleSubcatagory = ()=>{
        console.log('ok');
    }

  return (
    <div>

            <h1> SubCatagory Name:</h1>
            <Input onChange={(e) => Setsubcatagoryname(e.target.value)} placeholder="subcatagoryname" />


            
            <h1> SubCatagory Description:</h1>
            <Input onChange={(e) => SetsubcatagorDescription(e.target.value)} placeholder="subcatagoryDescription" />

            <br/>
            <br/>
            <Button onClick={handleSubcatagory} type='primary'>Subcatagory Upload</Button>




        </div>
  )
}

export default Addsubcatagory