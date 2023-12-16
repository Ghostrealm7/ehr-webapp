import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function HealthReportCreate() {
  const [date, setDate] = useState();
  const [reason, setReason] = useState("");
  const [temp, setTemp] = useState("");
  const [bloodpressure, setBloodpressure] = useState("")
  const [heart, setHeartrate] = useState("")
  const [bloodoxygen, setBloodoxygen] = useState("")
  const [diagnosis, setDiagnosis] = useState("")
  const [test, setTest] = useState("")
  const [testresults, setTestresults] = useState("")
  const [remarks, setRemarks] = useState("")
  const [doctor_id, setDoctor_id] = useState()

    const {id}  = useParams()
    const submitUserData = async e => {
      e.preventDefault()
      try {
        await axios.post(`http://localhost:3500/api/register_report`, {
        patient_id: id,
        visit_date: date,
        visit_reason: reason,
        diagnosis: diagnosis,
        test: test,
        test_result: testresults,
        temperature: temp,
        heart_rate: heart,
        blood_pressure: bloodpressure,
        blood_oxygen: bloodoxygen,
        remarks: remarks,
        doctor_id: doctor_id
      })
    }catch(err){
      console.log(err)
    }
    }
  return (
      <>
          <div className="flex-1 bg-white flex justify-center items-center">
                <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-extrabold text-gray-900" >Create Medical Report</h2>
                    <form 
                        className="mt-8 space-y-4"
                        onSubmit={submitUserData}>
                            <label className="block text-sm font-medium text-gray-700">
                            Appointment Date
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
                            Appointment Reason
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="text" 
                                onChange={(e) => {
                                setReason(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Temperature
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="temperature" 
                                onChange={(e) => {
                                setTemp(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Blood Pressure
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="blood_pressure" 
                                onChange={(e) => {
                                setBloodpressure(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Heart Rate
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="heart_rate" 
                                onChange={(e) => {
                                setHeartrate(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Blood Oxygen
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="blood_oxygen" 
                                onChange={(e) => {
                                setBloodoxygen(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Diagnosis
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="diagnosis" 
                                onChange={(e) => {
                                setDiagnosis(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Test
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="test" 
                                onChange={(e) => {
                                setTest(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Test Result
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="heart_rate" 
                                onChange={(e) => {
                                setTestresults(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Remarks
                            <input 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="text" 
                                name="remarks" 
                                onChange={(e) => {
                                setRemarks(e.target.value);
                                }} required />
                            </label>
                            <br />
                            <label className="block text-sm font-medium text-gray-700">
                            Doctor
                            <select 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                name="gender" 
                                value={doctor_id}
                                onChange={(e) => {
                                    setDoctor_id(e.target.value);
                                }}>
                                <option value="1">Maliha Mumtaj</option>
                                <option value="2">Shah Hossain</option>
                                <option value="3">Sebastian Vettal</option>
                                <option value="4">Kimi Raikonen</option>
                                <option value="5">Lewis Hamilton</option>
                            </select>
                            </label>
                            <br />
                            <button type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={submitUserData}>Create Medical Report</button>
                    </form>
                </div>
            </div>  

      </>

      );
}
