import {useEffect, useContext, useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'


export default function RootLayout() {

  const [navTitle, setNavTitle] = useState("الرئيسيه")
  
  return (
    <div className='flex flex-col gap-2'>
        <Navbar navTitle={navTitle} setNavTitle={setNavTitle} />
        <Outlet />
    </div>
  )
}
