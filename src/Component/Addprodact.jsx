import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState,convertToRaw } from 'draft-js';
import { Select, Tag } from 'antd';
import axios from 'axios';
import draftToHtml from 'draftjs-to-html';

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color="green"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginInlineEnd: 4,
      }}
    >
      {label}
    </Tag>
  );
};

const Addprodact = () => {

  const [store, setStore] = useState([]);
  const [data, setData] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [producat, Setprodactname] = useState('');
 const [storeName, SetstoreName]=useState('')


  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  useEffect(() => {
    async function allstoredata() {
      let arr = []
      const data = await axios.get('http://localhost:3000/api/v1/merchant/allstore');
      setStore(data.data);

      data.data.map((Item) => {
        arr.push({
          value: Item._id,
          label: Item.storename

        })
      })
      setData(arr)
    }
    allstoredata()
  }, [])



  const handleProducatUpload = () => {

    console.log(producat);
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    console.log(storeName);
  }

  return (
    <div>
      <h1 onChange={(e) => Setprodactname(e)}> Product Name:</h1>
      <Input placeholder="Product Name" />

      <h1> Product Description:</h1>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />

      <h1>Product variant</h1>
      <Select
        mode="multiple"
        tagRender={tagRender}

        style={{
          width: '100%',
        }}
      
      />

      <h1>Producat Store Name:</h1>
      <Select
      onChange={(e)=> SetstoreName (e)}
        mode="single"
        tagRender={tagRender}

        style={{
          width: '100%',
        }}
        options={data}
      />
      <br />
      <br />
      <Button onClick={handleProducatUpload} type='primary'>Producat Upload</Button>
    </div>
  )
}

export default Addprodact