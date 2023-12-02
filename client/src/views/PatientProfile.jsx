import React from 'react'
import { TbReportMedical, TbVaccine, TbListDetails } from "react-icons/tb";
import { GiPoisonBottle } from "react-icons/gi";
// import PatientTable from '../components/PatientTable';
import MedicalReportPanel from './MedicalReportPanel';
import MedicalReportTable from '../components/MedicalReportTable';

const recentOrderData = [
	{
		id: '1',
		product_id: '01666040999',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '1999-02-17T03:24:00',
		shipment_address: 'Cottage Grove, OR 97424',
        gender: 'Male',
        blood_group: 'AB+'
	},
	{
		id: '7',
		product_id: '01376042932',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '1997-01-14T05:24:00',
		order_total: '$96.35',
		shipment_address: 'Los Angeles, CA 90017',
        gender: 'Male',
        blood_group: 'A+'
	},
	{
		id: '2',
		product_id: '01722040932',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '1988-05-17T07:14:00',
		order_total: '$836.44',
		shipment_address: 'Westminster, CA 92683',
        gender: 'Female',
        blood_group: 'B+'
	},
	{
		id: '3',
		product_id: '01776040990',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2003-10-23T12:40:00',
		order_total: '$334.50',
		shipment_address: 'San Mateo, CA 94403',
        gender: 'Female',
        blood_group: 'O+'
	},
	{
		id: '4',
		product_id: '01776040932',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2001-05-09T03:24:00',
		order_total: '$876.00',
		shipment_address: 'San Mateo, CA 94403',
        gender: 'Female',
        blood_group: 'B+'
	},
	{
		id: '5',
		product_id: '01776040932',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '1992-05-14T05:24:00',
		order_total: '$96.35',
		shipment_address: 'Los Angeles, CA 90017',
        gender: 'Male',
        blood_group: 'AB+'
	}
]

export default function PatientProfile() {
  return (
	<>
    <div className='flex gap-4'>
		<div className='p-4 flex bg-white shadow-lg justify-around items-center basis-full'>
				<div className='flex flex-col items-center justify-center'>
					<div className="rounded h-28 w-28 flex items-center justify-center bg-gray-800">
						<TbListDetails className="text-7xl text-white" />
					</div>
					<div className='pt-4'>
					<button
							className="flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
							<div className=''>
								<p className=''>Edit Details</p>
							</div>
						</button>
					</div>				
				</div>
				<div className="">
					<span className="text-xl text-gray-500 font-bold">Patient Details</span>
					<div className="flex flex-col items-left text-gray-500 pt-2">
						<p>Name: Shah Javed</p>
						<p>Age: 25</p>
						<p>Gender: M</p>
						<p>Blood Group: AB+</p>
						<p>Date of Birth: 05 Jan 1997</p>
					</div>
				</div>
		</div>
		<div className='p-4 flex bg-white shadow-lg justify-around items-center basis-full'>
				<div className='flex flex-col items-center justify-center'>
					<div className="rounded h-28 w-28 flex items-center justify-center bg-red-600">
						<GiPoisonBottle className="text-7xl text-white" />
					</div>
					<div className='pt-4'>
						<button
							className="flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
							<div className=''>
								<p className=''>Add Allergen</p>
							</div>
						</button>
					</div>
				</div>
				<div className="">
					<span className="text-xl text-gray-500 font-bold">Known Allergens</span>
					<div className="flex flex-col items-left text-gray-500 pt-2">
						<p>Peanut Allergy</p> 
						<p>Dermatitis</p>
					</div>
				</div>
		</div>
		<div className='p-4 flex bg-white shadow-lg justify-around items-center basis-full'>
				<div className='flex flex-col items-center justify-center'>
					<div className="rounded h-28 w-28 flex items-center justify-center bg-violet-600">
						<TbVaccine className="text-7xl text-white" />
					</div>
					<div className='pt-4'>
						<button
							className="flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
							<div className=''>
								<p className=''>Add Vaccine</p>
							</div>
						</button>
					</div>
				</div>
				<div className="">
					<span className="text-xl text-gray-500 font-bold">Vaccination History</span>
					<div className="flex flex-col items-left text-gray-600 text-sm pt-2">
						<div className='flex'>
							<p className="pr-2">Influnza Vaccine</p>
							<p className='font-bold text-violet-800'>05/04/1997</p>
						</div>
						<div className='flex pt-1'>
							<p className="pr-2">ChickenPox</p>
							<p className='font-bold text-violet-800'>05/04/1997</p>
						</div>
						<div className='flex pt-1'>
							<p className="pr-2">Hepatitis A</p>
							<p className='font-bold text-violet-800'>05/04/1997</p>
						</div>
						<div className='flex pt-1 '>
							<p className="pr-2">Hepatitis B</p>
							<p className='font-bold text-violet-800'>05/04/1997</p>
						</div>
						<div className='flex pt-1'>
							<p className="pr-2 ">Tetanus</p>
							<p className='font-bold text-violet-800'>05/04/1997</p>
						</div>
						<div className='flex pt-1'>
							<p className="pr-2">Hepatitis B</p>
							<p className='font-bold text-violet-800'>05/04/1997</p>
						</div>
					</div>
				</div>
		</div>
	</div>
	<div className='pt-4'>
		<MedicalReportTable/>
	</div>
	</>
  )
}
