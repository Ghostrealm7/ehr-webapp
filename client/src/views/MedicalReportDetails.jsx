import React from 'react'
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import { TbListDetails } from "react-icons/tb";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { MdOutlineBloodtype } from "react-icons/md";

import {useParams} from "react-router-dom"
import axios from 'axios';
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal';

export default function MedicalReportDetails() {
	const {id}  = useParams()
// Very important to set useState([]) or ({}) parameter properly...make sure you know what data you will be receiving.

    const [medicine, setMedicine] = useState()
    const [dosage, setDosage] = useState()
	const [reportData, setReportData] = useState([])
	const [prescriptionData, setPrescriptionData] = useState([])


    const [showModal, setShowModal] = useState(false);
    const submitPresData = async e => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3500/api/add_pres/${id}`, {
                medicine_name: medicine,
                dosage: dosage,
          })
      }catch(err){
        console.log(err)
      }
    }
	useEffect(()=>{
		const fetchReportData = async ()=>{
			try{
				const res = await axios.get(`http://localhost:3500/api/report/${id}`)
				setReportData(res.data);
				console.log(res.data)
			}catch(err){
				console.log(err)
			}
		}
		fetchReportData()

		const fetchPrescriptionData = async ()=>{
			try{
				const res = await axios.get(`http://localhost:3500/api/report/prescription/${id}`)
				setPrescriptionData(res.data);
				// console.log(res.data)
			}catch(err){
				console.log(err)
			}
		}
		fetchPrescriptionData()
		
	},[])

  return (

	  <>
        <div className='my-4'>
        {reportData.map((report, index) => (

            <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                <div className="mt-3 p-2">
                    <p className='text-sm text-gray-500 font-bold pb-1'>Medical Report ID: {report.report_id}</p>
                    <p className='text-sm text-gray-500 font-bold pb-1'>Appointment Date: {format(new Date(report.visit_date), 'dd MMM yyyy')}</p>
                    <p className='text-sm text-gray-500 font-bold pb-1'>Appointment Reason: {report.visit_reason}</p>
                </div>
            </div>
                    ))}
        </div>      
        <div className='flex gap-4'>
            {/* Patient Details */}
            <div className='p-4 flex-1 w-40 bg-white shadow-lg justify-around items-center basis-full'>
                    <div className='flex flex-col items-left justify-center pb-4'>
                        <div className="rounded h-24 w-24 flex items-center justify-center bg-gray-800">
                            <TbListDetails className="text-7xl text-white" />
                        </div>
                        <h1 className="text-xl text-gray-500 font-bold pt-4">PATIENT DETAILS</h1>			
                    </div>
                    {reportData.map((patient, index) => (
                        <div className=""key={index}>
                            <p className='text-sm text-gray-500 font-bold pb-1'>ID: {patient.patient_id}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Name: {patient.patient_name}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Gender: {patient.gender}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Blood Group: {patient.bloodgroup}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Date of Birth: {format(new Date(patient.dob), 'dd MMM yyyy')}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Email: {patient.email}</p>
                        </div>
                    ))}
            </div>

            {/* Allergy DETAILS */}
            <div className='p-4 flex-1 w-40 bg-white shadow-lg justify-around items-center basis-full'>
                    <div className='flex flex-col items-left justify-center pb-4'>
                        <div className="rounded h-24 w-24 flex items-center justify-center bg-gray-800">
                            <GiPlagueDoctorProfile className="text-7xl text-white" />
                        </div>
                        <h1 className="text-xl text-gray-500 font-bold pt-4">DOCTOR DETAILS</h1>			
                    </div>
                    {reportData.map((doctor, index) => (
                        <div className=""key={index}>
                            <p className='text-sm text-gray-500 font-bold pb-1'>ID: {doctor.doctor_id}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Doctor Name: {doctor.doctor_name}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Specialty: {doctor.specialty}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Hospital: Apollo Hospitals</p>
                        </div>
                    ))}
            </div>

            {/* Vaccine Details */}
            <div className='p-4 flex-1 w-40 bg-white shadow-lg justify-around items-center basis-full'>
                    <div className='flex flex-col items-left justify-center pb-4'>
                        <div className="rounded h-24 w-24 flex items-center justify-center bg-gray-800">
                            <MdOutlineBloodtype className="text-6xl text-white" />
                        </div>
                        <h1 className="text-xl text-gray-500 font-bold pt-4">VITALS</h1>			
                    </div>
                    {reportData.map((patient, index) => (
                        <div className=""key={index}>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Temperature: {patient.temperature}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Blood Pressure: {patient.blood_pressure}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Heart Rate: {patient.heart_rate}</p>
                            <p className='text-sm text-gray-500 font-bold pb-1'>Blood Oxygen: {patient.blood_oxygen}</p>
                        </div>
                    ))}
            </div>
            <div className='p-4 flex-1 w-40 bg-white shadow-lg justify-around items-center basis-full'>
                    <div className='flex flex-col items-left justify-center pb-4'>
                        <div className="rounded h-24 w-24 flex items-center justify-center bg-gray-800">
                            <FaPrescriptionBottleMedical className="text-6xl text-white" />
                        </div>
                        <h1 className="text-xl text-gray-500 font-bold pt-4">PRESCRIPTION</h1>			
                    </div>
                    <table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Medicine</th>
							<th>Dosage</th>
						</tr>
					</thead>
					<tbody>
                    {prescriptionData.map((prescription, index) => (
                        <tr key={index}>
                        <td>{prescription.medicine_name}</td>
                        <td>{prescription.dosage}</td>
                    </tr>
                    ))}
                    </tbody>
				</table>
                <div className='pt-4'>
					<button onClick={()=>setShowModal(true)} className='flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
					ADD Prescription
				</button>
				<Modal isVisible={showModal} onClose={()=>setShowModal(false)}> 
				<div className="flex-1 bg-white flex justify-center items-center">
                <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-extrabold text-gray-900" >ADD Prescription</h2>
                    <form 
                        className="mt-8 space-y-4"
                        onSubmit={submitPresData}>
                            

							<label className="block text-sm font-medium text-gray-700">
                            Medicine Name
                            <input
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="text" 
                            name="medicine_name" 
                            onChange={(e) => {
                                setMedicine(e.target.value);
                            }} required />
                            </label>
                            <br />
							<label className="block text-sm font-medium text-gray-700">
                            Dosage
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="dosage" 
                                onChange={(e) => {
                                setDosage(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <button type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={submitPresData}>Add Prescription</button>
                    </form>
                </div>
            	</div>  
				</Modal>
					</div>
            </div>
        </div>

	{/* Vaccination Details*/}


	{/*  Individual Patient Medical Reports */}
	<div className='pt-4'>

    {reportData.map((patient, index) => (
	    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                       
            <div className="border border-gray-200 rounded-lg mt-3 p-2">
                <p className='text-sm text-gray-500 font-bold pb-1'>Diagnosis</p>
                <p>{patient.diagnosis}</p>
			</div>
            <div className="border border-gray-200 rounded-lg mt-3 p-2">
                <p className='text-sm text-gray-500 font-bold pb-1'>Remarks</p>
                <p>{patient.remarks}</p>
			</div>
            <div className="border border-gray-200 rounded-lg mt-3 p-2">
                <p className='text-sm text-gray-500 font-bold pb-1'>Test: {patient.test}</p>
                <p className='text-sm text-gray-500 font-bold pb-1'>Test Result: {patient.test_results}</p>
			</div>
		</div>
                    ))}
	</div>
	</>
  )
}
