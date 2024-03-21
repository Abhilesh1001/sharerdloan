'use client'
import { handleSignup } from '@/actiondata/logination'

import React,{useRef} from 'react'
import Button from '@/Components/button/Button'

const Page = () => {
  
    const ref:any = useRef(null)

  return (
    <div className='flex justify-center mt-20 min-h-screen'>
            <form ref={ref} action={async formData=>{
                const res = await handleSignup(formData)
                ref.current.reset()
                
                }} >
                <label htmlFor="email" className='block'>Name</label>
                <input type="text" required name='name' placeholder="name" className="input input-bordered w-80 my-4" />
                <label htmlFor="email" className='block'>Email</label>
                <input type="email" required name='email' placeholder="email" className="input input-bordered w-80 my-4" />
                <label htmlFor="email" className='block'>Password</label>
                <input type="password" required name='password' placeholder="password" className="input input-bordered w-80 mb-4" />
                <label htmlFor="email" className='block'>Confirm Password</label>
                <input type="password" required name='password2' placeholder="confirm password" className="input input-bordered w-80 mb-4" />
                <div>
                <input type="checkbox" name='checkbox' defaultChecked className="checkbox" />
                <label htmlFor="email" className='ml-2 mb-4'>Do you Agree</label>
                </div>
               <Button />
            </form>

        </div>
  )
}

export default Page