import React, { useState } from 'react'
import { Input } from 'antd';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';
import { Select, Tag } from 'antd';
const options = [
  {
    value: 'gold',
  },
  {
    value: 'lime',
  },
  {
    value: 'green',
  },
  {
    value: 'cyan',
  },
];

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
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <div>
    <h1> Product Name:</h1>
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
    options={options}
  />

  <h1>Producat Store Name:</h1>
  <Select
    mode="single"
    tagRender={tagRender}

    style={{
      width: '100%',
    }}
    options={options}
  />
    </div>
  )
}

export default Addprodact