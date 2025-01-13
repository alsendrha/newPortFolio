import React from 'react'
import Contact from './Contact'
import { contactData } from '@/utils/data/listData'
import ContactLast from './ContactLast'

const Section06 = () => {
  return (
    <div className='w-full bg-black flex flex-col items-center text-white py-10 px-10'>
      <div className='w-full flex max-w-[750px] justify-between'>
        {contactData.map(data => (
          <Contact key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
      <ContactLast />
    </div>
  )
}

export default Section06