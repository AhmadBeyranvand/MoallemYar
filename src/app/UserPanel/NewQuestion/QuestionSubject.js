
import React from 'react'
import Image from 'next/image';
import tak from "../../../../public/assets/img/icons/trueFalse.png";

import { Input } from 'antd';
const QuestionSubject = () => {
   
    return (
        <div className='w-full h-screen'>
            <div className='flex '>
                <h3>عنوان  سوال</h3>
                <p>بارم (نمره)</p>
            </div>
            <div className='flex gap-3 mt-3'>
                <Input size="large" placeholder="...اینجاچیزی بنویسید"  />
                <input placeholder='برای مثال:2'  />
            </div>


            <div className='flex mt-8'>
                <div>
                    <h4>نوع سوال</h4>
                </div>

            </div>
            <div className='items-center mt-5  bg-red-200 '>

                <div className='flex bg-white w-3/4  rounded-2xl '>
                    <div className='w-1/5 items-center justify-center border border-dark '>
                        <Image  width={70} alt='fare' src={tak}/>
                        <p>تک  کلمه ای</p>
                    </div>
                    <div className='w-1/5 items-center justify-center border border-dark '>
                        <Image  width={70} alt='fare' src={tak}/>
                        <p>جورکردنی</p>
                    </div>
                    <div className='w-1/5 items-center justify-center  border border-dark  '>
                        <Image  width={70} alt='fare' src={tak}/>
                        <p>تشریحی</p>
                    </div>
                    <div className='w-1/5 items-center justify-center  border border-dark  '>
                        <Image  width={70} alt='fare' src={tak}/>
                        <p>صحیح/غلط</p>
                    </div>
                    <div className='w-1/5 items-center justify-center  border border-dark  '>
                        <Image  width={70} alt='fare' src={tak}/>
                        <p>چهار گزینه ای</p>
                    </div>
                    
                </div>
            </div>



        </div>


    )
}
export default QuestionSubject