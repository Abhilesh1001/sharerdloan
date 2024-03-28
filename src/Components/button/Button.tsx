import React from 'react'
import { useFormStatus } from 'react-dom'

const Button = () => {
  const {pending}= useFormStatus()
  return (

    <button className="btn btn-success mb-60 block">  {pending ?'Loading':'Submit'}</button>
  )
}

export default Button