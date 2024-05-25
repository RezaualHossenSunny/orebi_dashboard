import { Button, Input, Select } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Addsubcatagory = () => {
    const [subcatagoryname ,Setsubcatagoryname]=useState('');
    const [catagoryDescription,SetsubcatagorDescription]=useState('');

    const [catagory,Setcatagory]=useState();




    const [data,SetData]=useState([])
     

    const handleSubcatagory = ()=>{
        console.log(subcatagoryname);
        console.log(catagoryDescription);
        console.log(catagory);

        const daat = axios.post('http://localhost:3000/api/v1/catagory/createsubcatagory',{
          name:subcatagoryname,
          discripstion:catagoryDescription,
          catagory :catagory
        })
    }
    useEffect(() => {
      async function Allcatagorydata() {
        let arr = []
        const data = await axios.get('http://localhost:3000/api/v1/catagory/getallcatagory');
        console.log(data.data);
        // setStore(data.data);
  
        data.data.map((Item) => {
          arr.push({
            value: Item._id,
            label: Item.name

  
          })
        })
        SetData(arr)
      }

      Allcatagorydata()
    }, [])
    console.log(data);
  return (
    <div>
          <h1> Seleact SubCatagory Name:</h1>
          <Select
        onChange={(e)=> Setcatagory (e)}
        mode="single"
       

        style={{
          width: '100%',
        }}
        options={data}
      />


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