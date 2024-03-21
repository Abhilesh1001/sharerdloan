'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'


const ButtonLogout = () => {
  const {pending}= useFormStatus()


  return (
    <button className="btn btn-error btn-sm ml-2 mr-5" type='submit'>{pending ?'Loading':'Logout'}</button>
  )
}

export default ButtonLogout