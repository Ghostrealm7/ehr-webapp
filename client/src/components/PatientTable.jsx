import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

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

export default function PatientTable() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Patient List</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Customer Name</th>
							<th>Gender</th>
                            <th>Blood Group</th>
							<th>Date of Birth</th>
							<th>Phone</th>
							<th>Address</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/patientprofile`}>{order.customer_name}</Link>
									{/* <Link to={`/patientprofile/${order.customer_id}`}>{order.customer_name}</Link> */}
								</td>
                                <td>{order.gender}</td>
                                <td>{order.blood_group}</td>
								<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
								<td>{order.product_id}</td>
								<td>{order.shipment_address}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}