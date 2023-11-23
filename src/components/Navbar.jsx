import {useContext} from 'react'
import {Link} from "react-router-dom"
import { useUserContext } from '../UserContext'
import http from '../http';


export default function Navbar({ navTitle ,setNavTitle }) {
  const {email, logoutUser} = useUserContext()
  function logout() {
    logoutUser();
  }

  return (
    email && <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold text-lg"></div>
          <ul className="flex space-x-4">
            <li>
              <Link to={"/"} className="text-white hover:text-gray-300">الرئيسيه</Link>
            </li>
            <li>
              <Link to={"/search"} className="text-white hover:text-gray-300">البحث</Link>
            </li>
            <li>
              <Link to={"/cart"} className="text-white hover:text-gray-300">السله</Link>
            </li>
            <li>
              <Link to={"/"} className="text-white hover:text-gray-300">المبيعات</Link>
            </li>
            <li>
              <button className="text-sm bg-blue-100 py-1 px-2 text-black-400 border rounded-sm" onClick={logout}>تسجيل خروج</button>
            </li>
          </ul>
        </div>
      </nav>
  )
}
