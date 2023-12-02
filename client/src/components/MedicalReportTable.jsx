import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

const recentOrderData = [
	{
		id: '1',
		patient_id: '23143',
		patient_name: 'Shirley A. Lape',
        doctor_name: 'Dr. Batman',
		visit_date: '2019-02-17T03:24:00',
		diagnosis: 'Viral Fever'
	},
	{
		id: '7',
		patient_id: '96453',
		patient_name: 'Ryan Carroll',
        doctor_name: 'Dr. Iron Man',
		visit_date: '2021-01-14T05:24:00',
		diagnosis: 'Sore throat'
	},
	{
		id: '2',
		patient_id: '65345',
		patient_name: 'Mason Nash',
        doctor_name: 'Dr. Shontu Montu',
		visit_date: '2022-05-17T07:14:00',		
		diagnosis: 'Hyperactive Thyroid'
	},
	{
		id: '3',
		patient_id: '87832',
		patient_name: 'Luke Parkin',
        doctor_name: 'Dr. Shontu Montu',
		visit_date: '2010-10-23T12:40:00',	
		diagnosis: 'High cholestrol'
	},
	{
		id: '4',
		patient_id: '09832',
		patient_name: 'Anthony Fry',
        doctor_name: 'Dr. Kontu Poltu',
		visit_date: '2023-05-09T03:24:00',		
		diagnosis: 'Inflamation of lungs'
	},
	{
		id: '5',
		patient_id: '97632',
		patient_name: 'Ryan Carroll',
        doctor_name: 'Dr. Sheikh Hasina',
		visit_date: '2023-05-14T05:24:00',
		diagnosis: 'Blocked artery'
	}
]

export default function MedicalReportTable() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Medical Report</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Patient Name</th>
							<th>Doctor Name</th>
                            <th>Appointment Date</th>
							<th>Diagnosis</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/patientprofile`}>{order.patient_name}</Link>
									{/* <Link to={`/patientprofile/${order.patient_id}`}>{order.patient_name}</Link> */}
								</td>
                                <td>{order.doctor_name}</td>
								<td>{format(new Date(order.visit_date), 'dd MMM yyyy')}</td>
								<td>{order.diagnosis}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}