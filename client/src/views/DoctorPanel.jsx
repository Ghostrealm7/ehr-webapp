import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FaUserPlus } from "react-icons/fa6";

export default function DoctorPanel() {
  const navigate = useNavigate();

  const navigateRegister = () => {
          navigate('/register/doctor');
          };
  return (

    <div className='pb-4'>
      <button
          onClick={navigateRegister}
          className="flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
          <div className='p-1'>
              <FaUserPlus fontSize={20} />
          </div>
          <div className='pl-2'>
              <p className=''>Add New Doctor</p>
          </div>
      </button>
    </div>
  )
}
