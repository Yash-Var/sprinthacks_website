import Reacts from 'react'
import data from './Data.json'
import Accordian from './Accordian'
import faq from './images/FAQ.png'
import { useState } from 'react'



const Faq = () => {

  const [open ,setOpen]=useState(false)
  const toggle=(index)=>{
    if(open==index)
    {
      return setOpen(null)
    }
    setOpen(index)
  }
  return (
    <div className='overflow-hidden top_faq '>
      <div className='flex justify-center '>
      <h1 className='text-white main text-7xl p-10 '>FAQ's</h1>
      </div>
      <div className='flex '>
      <div className=' text-white flex-col w-[800px] faq  '>
{data.map((data,index)=>{
  return <Accordian
  key={index}
  open={index==open}
  title={data.title}
  desc={data.desc}
  toggle={()=>toggle(index)}
  />
})}

</div>
<div className='pl-72 image_faq'>
  <img src={faq} />
</div>
</div>
    </div>
  )
}

export default Faq