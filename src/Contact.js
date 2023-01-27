import React from 'react'
import frame from './images/Frame 9.png'
import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'
import mail from './images/mail.png'

const Contact = () => {
  return (
    <div className='bg-gray-900 flex justify-center p-10 space-x-4'>
        <h1 className='text-white main text-3xl'>Contact us at:</h1>
<a href='https://www.instagram.com/dsckiet/'><img src={instagram} /></a>
<a href='https://twitter.com/dsckiet'><img src={twitter} /></a>
<a href='https://www.linkedin.com/company/dsckiet/mycompany/'><img src={linkedin} /></a>
<a href='mailto:dsckiet@gmail.com'><img src={mail} /></a>
    </div>
  )
}

export default Contact