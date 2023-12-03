import React from 'react'
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { FaClinicMedical } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { IoPeople} from 'react-icons/io5'

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<div className='p-4 flex bg-white shadow-lg justify-center items-center basis-full rounded-xl'>
				<div className="rounded-full h-20 w-20 flex items-center justify-center bg-violet-600">
					<TbReportMedical className="text-5xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-md text-gray-500 font-bold text-xs">MEDICAL REPORTS</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1337</strong>
						<span className="text-sm text-green-500 pl-2">+343</span>
					</div>
				</div>
			</div>
			<div className='p-4 flex bg-white shadow-lg justify-center items-center basis-full rounded-xl'>
				<div className="rounded-full h-20 w-20 flex items-center justify-center bg-sky-400">
					<IoPeople className="text-5xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-md text-gray-500 font-bold text-xs">PATIENTS</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">420</strong>
						<span className="text-sm text-green-500 pl-2">+6</span>
					</div>
				</div>
            </div>
            
            <div className='p-4 flex bg-white shadow-lg justify-center items-center basis-full rounded-xl'>
				<div className="rounded-full h-20 w-20 flex items-center justify-center bg-indigo-600">
					<GiPlagueDoctorProfile className="text-5xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-md text-gray-500 text-xs font-bold">DOCTORS</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">360</strong>
						<span className="text-sm text-green-500 pl-2">+30</span>
					</div>
				</div>
            </div>

            <div className='p-4 flex bg-white shadow-lg justify-center items-center basis-full rounded-xl'>

				<div className="rounded-full h-20 w-20 flex items-center justify-center bg-fuchsia-600">
					<FaClinicMedical className="text-5xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-md text-gray-500 text-xs font-bold">MEDICAL CENTERS</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">69</strong>
						<span className="text-sm text-green-500 pl-2">+2</span>
					</div>
				</div>
               
            </div>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}