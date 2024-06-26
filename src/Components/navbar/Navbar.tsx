import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
// import ButtonLogout from '../button/buttonLogout'
// import { redirect } from 'next/navigation'

const Navbar = () => {

  const user :any = cookies().get('user')!==null && cookies().get('user') 

  // async function handleLogout(){
  //   'use server'
  //     console.log('ok')
  //     cookies().delete('access')
  //     cookies().delete('refresh')
  //     cookies().delete('user')
  //     redirect(`/login`)
  // }

  return (
  <div className="navbar bg-base-300 fixed top-0 w-full z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
            <Link href={'/login'}>Login</Link>
        </li>
        <li><Link href={'/signup'}>Signup</Link></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link href={'/'} className="btn btn-ghost text-xl">Home</Link>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>

      <div className="text-nowrap">
        {user && user.value}
      </div>
      {/* <form action={handleLogout}>
          <ButtonLogout />
      </form> */}
  </div>
</div>
  )
}

export default Navbar