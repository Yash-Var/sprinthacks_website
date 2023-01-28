import Reacts from 'react'
import data from './Data.json'
import Accordian from './Accordian'
import faq from './images/Saly-6.png'
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
    <div className='p-8'>
      <div className='flex justify-center '>
      <h1 className='text-white main text-7xl p-10  '>FAQ's</h1>
      </div>
      <div className='flex'>
      <div className='justify-right text-white flex-col w-[800px]'>
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
<div className='pl-72'>
  <img src={faq} />
</div>
</div>
    </div>
  )
}

export default Faq