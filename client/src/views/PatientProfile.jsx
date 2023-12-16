import React from 'react'
import { useState, useEffect } from 'react';
import { TbVaccine, TbListDetails } from "react-icons/tb";
import { GiPoisonBottle } from "react-icons/gi";
import {useParams} from "react-router-dom"
import axios from 'axios';
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

export default function PatientProfile() {
	const {id}  = useParams()
	const [allergy_id, setAllergy_id] = useState()
	const [vaccine_id, setVaccine_id] = useState()
	const [vaccineAdmin, setVaccineAdmin] = useState("")
	const [date, setDate] = useState();
	const navigate = useNavigate();

	const navigateRegister = () => {
		navigate(`/createmedicalreport/${id}`);
		};
  
	const submitUserData = async e => {
	  e.preventDefault()
	  try {
		  await axios.post(`http://localhost:3500/api/add_allergy/${id}`, {
			allergy_id: allergy_id,
		})
	}catch(err){
	  console.log(err)
	}
  }

  const submitVaccineData = async e => {
	e.preventDefault()
	try {
		await axios.post(`http://localhost:3500/api/add_vaccine/${id}`, {
			vaccine_id: vaccine_id,
			date: date,
			vaccine_adminstrator: vaccineAdmin,
	  })
  }catch(err){
	console.log(err)
  }
}
// Very important to set useState([]) or ({}) parameter properly...make sure you know what data you will be receiving.
	const [singlePatientData, setSinglePatientData] = useState([])
	const [patientMedicalReport, setPatientMedicalReport] = useState([])
	const [patientAllergyData, setPatientAllergyData] = useState([])
	const [vaccinationData, setVaccinationData] = useState([])
	const [showModal, setShowModal] = useState(false);
	useEffect(()=>{
		const fetchPatientData = async ()=>{
			try{
				const res = await axios.get(`http://localhost:3500/api/patient/${id}`)
				setSinglePatientData(res.data);
				// console.log(res.data)
			}catch(err){
				console.log(err)
			}
		}
		fetchPatientData()
		const fetchPatientMedicalReport = async ()=>{
			try{
				const res = await axios.get(`http://localhost:3500/api/patient/medical_report/${id}`)
				setPatientMedicalReport(res.data);
				console.log(res.data)
			}catch(err){
				console.log(err)
			}
		}
		fetchPatientMedicalReport()

		const fetchPatientAllergyData = async ()=>{
			try{
				const res = await axios.get(`http://localhost:3500/api/patient/allergy/${id}`)
				setPatientAllergyData(res.data);
				// console.log(res.data)
			}catch(err){
				console.log(err)
			}
		}
		fetchPatientAllergyData()

		const fetchVaccinationData = async ()=>{
			try{
				const res = await axios.get(`http://localhost:3500/api/patient/vaccination/${id}`)
				setVaccinationData(res.data);
				// console.log(res.data)
			}catch(err){
				console.log(err)
			}
		}
		fetchVaccinationData()
		
	},[])

  return (

	  <>
	  <h1>{id}</h1>
    <div className='flex gap-4'>
		{/* Patient Details */}
		<div className='p-4 flex-1 w-40 bg-white shadow-lg justify-around items-center basis-full'>
				<div className='flex flex-col items-left justify-center pb-4'>
					<div className="rounded h-28 w-28 flex items-center justify-center bg-gray-800">
						<TbListDetails className="text-7xl text-white" />
					</div>
					<h1 className="text-xl text-gray-500 font-bold pt-4">PATIENT DETAILS</h1>			
				</div>
				{singlePatientData.map((patient, index) => (
					<div className=""key={index}>
						<p className='text-sm text-gray-500 font-bold pb-1'>ID: {patient.patient_id}</p>
						<p className='text-sm text-gray-500 font-bold pb-1'>Name: {patient.name}</p>
						<p className='text-sm text-gray-500 font-bold pb-1'>Gender: {patient.gender}</p>
						<p className='text-sm text-gray-500 font-bold pb-1'>Blood Group: {patient.bloodgroup}</p>
						<p className='text-sm text-gray-500 font-bold pb-1'>Date of Birth: {format(new Date(patient.dob), 'dd MMM yyyy')}</p>
						<p className='text-sm text-gray-500 font-bold pb-1'>Email: {patient.email}</p>
					</div>
				))}
				<div className='pt-4'>
					<button
						className="flex py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
						<div className=''>
							<p className=''>Edit Details</p>
						</div>
					</button>
				</div>
		</div>

		{/* Allergy DETAILS */}
		<div className='p-4 flex-1 w-40 bg-white shadow-lg justify-around items-center basis-full'>
				<div className='flex flex-col items-left justify-center pb-4'>
					<div className="rounded h-28 w-28 flex items-center justify-center bg-red-600">
						<GiPoisonBottle className="text-7xl text-white" />
					</div>
					<h1 className="text-xl text-gray-500 font-bold pt-4">ALLERGY DETAILS</h1>			
				</div>
				{patientAllergyData.map((allergy, index) => (
					<div className=""key={index}>
						{/* <p className='text-sm text-gray-500 font-bold pb-1'>ID: {allergy.allergy_id}</p> */}
						<p className='text-sm text-gray-500 font-bold pb-1'>{allergy.allergy_name}</p>
					</div>
				))}
				<div className='pt-4'>
					<button onClick={()=>setShowModal(true)} className='flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
						ADD ALLERGY
					</button>
					<Modal isVisible={showModal} onClose={()=>setShowModal(false)}> 
					<div className="flex-1 bg-white flex justify-center items-center">
					<div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-md">
						<h2 className="text-3xl font-extrabold text-gray-900" >ADD ALLERGY</h2>
						<form 
							className="mt-8 space-y-4"
							onSubmit={submitUserData}>
								
								<label className="block text-sm font-medium text-gray-700">
								Select Allergy
								<select 
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									name="gender" 
									value={allergy_id}
									onChange={(e) => {
										setAllergy_id(e.target.value);
									}}>
									<option value="1">Rhinitis</option>
									<option value="2">Dermatitis</option>
									<option value="3">Drug Allergy</option>
									<option value="4">Food Allergy</option>
									<option value="5">Skin Allergy</option>
									<option value="6">Asthma</option>
								</select>
								</label>
								<br />
								<button type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								onClick={submitUserData}>Add Allergy</button>
						</form>
					</div>
					</div>  
					</Modal>
				</div>
		</div>

		{/* Vaccine Details */}
		<div className='p-4 flex-1 w-40 bg-white shadow-lg justify-around items-center basis-full'>
				<div className='flex flex-col items-left justify-center pb-4'>
					<div className="rounded h-28 w-28 flex items-center justify-center bg-violet-600">
						<TbVaccine className="text-7xl text-white" />
					</div>
					<div className='pt-4'>
					<button onClick={()=>setShowModal(true)} className='flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
					ADD VACCINE
				</button>
				<Modal isVisible={showModal} onClose={()=>setShowModal(false)}> 
				<div className="flex-1 bg-white flex justify-center items-center">
                <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-extrabold text-gray-900" >ADD VACCINATION</h2>
                    <form 
                        className="mt-8 space-y-4"
                        onSubmit={submitVaccineData}>
                            
                            <label className="block text-sm font-medium text-gray-700">
                            Select Vaccination
                            <select 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                name="gender" 
                                value={vaccine_id}
                                onChange={(e) => {
                                    setVaccine_id(e.target.value);
                                }}>
                                <option value="1">Influenza Vaccine</option>
                                <option value="2">Chicken Pox Vaccine</option>
								<option value="3">Hepatitis A</option>
								<option value="4">Hepatitis B</option>
								<option value="5">Tetanus</option>

                            </select>
                            </label>
                            <br />
							<label className="block text-sm font-medium text-gray-700">
                            Date
                            <input
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="date" 
                            name="date" 
                            onChange={(e) => {
                                setDate(e.target.value);
                            }} required />
                            </label>
                            <br />
							<label className="block text-sm font-medium text-gray-700">
                            Vaccine Administrator Name
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="name" 
                                onChange={(e) => {
                                setVaccineAdmin(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <button type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={submitVaccineData}>Add Vaccination</button>
                    </form>
                </div>
            	</div>  
				</Modal>
					</div>
				</div>
				<div className="">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Vaccine Name</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
                    {vaccinationData.map((prescription, index) => (
                        <tr key={index}>
                        <td>{prescription.name}</td>
                        <td>{format(new Date(prescription.vaccination_date), 'dd MMM yyyy')}</td>
                    </tr>
                    ))}
                    </tbody>
				</table>		
				</div>
		</div>
	</div>


	<button 
		onClick={navigateRegister}
		className="mt-4 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
		<p className=''>ADD MEDICAL REPORT for Patient</p>
	</button>

	{/*  Individual Patient Medical Reports */}
	<div className='pt-4'>
	<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Individual Patient Medical Reports</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Report ID</th>
							<th>Patient Name</th>
							<th>Doctor Name</th>
                            <th>Appointment Date</th>
							<th>Diagnosis</th>
						</tr>
					</thead>
					<tbody>
						{patientMedicalReport.map((report, index) => (
							<tr key={index}>
								<td>
									<Link to={`/report/${report.report_id}`}>#{report.report_id}</Link>
								</td>
								<td>{report.patient_name}</td>
								<td>
									<Link to={`/patientprofile/${report.patient_name}`}>Dr. {report.doctor_name}</Link>
								</td>
								<td>{format(new Date(report.visit_date), 'dd MMM yyyy')}</td>
								<td>{report.diagnosis}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	</div>
	</>
  )
}
