import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import ButtonLogout from '../button/buttonLogout'
import { redirect } from 'next/navigation'
import Menu from '../menu/Menu'

const Navbar = () => {

  const user :any = cookies().get('user')!==null && cookies().get('user') 

  async function handleLogout(){
    'use server'
      console.log('ok')
      cookies().delete('access')
      cookies().delete('refresh')
      cookies().delete('user')
      redirect(`/login`)
  }

  return (
    <div className="navbar bg-base-300 fixed top-0 w-full z-50">
   <Menu />
  <div className="navbar-end">
  
      <div className="text-nowrap">
        {user && user.value}
      </div>
      <form action={handleLogout}>
          <ButtonLogout />
      </form>
  </div>
</div>
  )
}

export default Navbar