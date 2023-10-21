
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const QuestionSubject = () => {
    return (
        <div className='w-full h-screen'>
            <p>عنوان سوال</p>
            <div className='flex gap-2 mt-2'> 
         <Input size="large" placeholder="...اینجاچیزی بنویسید" prefix={<UserOutlined />} />
          <input  placeholder='برای مثال:2'  prefix={<UserOutlined />}/>
            </div>
        
        </div>
    )
}
export default QuestionSubject