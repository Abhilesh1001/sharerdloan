'use client'
import React,{useRef} from 'react'
import { handleLogin } from '@/actiondata/logination'
import Button from '@/Components/button/Button'
import { useRouter } from 'next/navigation'


const Page = () => {

    const router = useRouter()

    const ref:any = useRef(null)
    return (
        <div className='flex justify-center mt-20'>
            <form ref={ref}  action={async formData=>{
                 const res = await handleLogin(formData)
                 console.log(res)
                ref?.current?.reset()
            }}          
            >
                <label htmlFor="email" className='block'>Email</label>
                <input type="email" required name='email' placeholder="email" className="input input-bordered w-80 my-4" />
                <label htmlFor="email" className='block'>Password</label>
                <input type="password" required name='password' placeholder="password" className="input input-bordered w-80 mb-4" />
                <Button />
            </form>

        </div>

    )
}

export default Page