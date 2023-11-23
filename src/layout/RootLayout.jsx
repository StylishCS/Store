import {useEffect, useContext, useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useUserContext } from '../UserContext'


export default function RootLayout() {

  const [navTitle, setNavTitle] = useState("الرئيسيه")
  
  const {email} = useUserContext();
  const navigate = useNavigate();
  console.log(email);
  useEffect(() => {
    if(!email) {
      console.log('Logged');
      navigate('/login');
    }
  }, [email])

  return (
    <div className='flex flex-col gap-2'>
        <Navbar navTitle={navTitle} setNavTitle={setNavTitle} />
        <Outlet />
    </div>
  )
}
