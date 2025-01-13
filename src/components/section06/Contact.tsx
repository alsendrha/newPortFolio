import React from 'react'

type ContactProps = {
  title: string
  content: string
};

const Contact = ({ title, content }: ContactProps) => {
  return (
    <div className='flex'>
      <p className='mx-5 font-bold'>{title}</p>
      <p className='mx-5'>{content}</p>
    </div>
  )
}

export default Contact