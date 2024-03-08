import React from 'react'
import { Alert, Button } from 'antd';
import { Link } from 'react-router-dom';
const Error = () => {
    const btn={
        marginTop:"10px"
    }
  return (
 <div>
       <Alert
    message="Page Not Found"
    description="This is an error message about copywriting."
    type="error"
    showIcon
  />
  
  <Button style={btn} type="primary" danger>
     <Link to='/'>
        Back To Home
     </Link>
    </Button>
 </div>
  )
}

export default Error