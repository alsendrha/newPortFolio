'use client';


import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const Project = () => {
  const params = useSearchParams().get('id');

  return (
    <div>Project{params}</div>
  )
}

export default Project