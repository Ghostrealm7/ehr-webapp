import { GiPlagueDoctorProfile } from "react-icons/gi";
import { FaClinicMedical } from "react-icons/fa";
import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiUserGroup,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'overview',
		label: 'Overview',
		path: '/overview',
		icon: <HiOutlineViewGrid />
	},
    {
        key: 'docto',
        label: 'Doctor',
        path: '/',
        icon: <GiPlagueDoctorProfile />
    },
	{
		key: 'patient',
		label: 'Patient',
		path: '/',
		icon: <HiUserGroup />
	},
    {
		key: 'medicalreports',
		label: 'Medical Report',
		path: '/',
		icon: <HiOutlineCube />
	},
    {
		key: 'medicalcenter',
		label: 'Medical Center',
		path: '/overview',
		icon: <FaClinicMedical />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/overview',
		icon: <HiOutlineAnnotation />
	}
    
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/login',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/login',
		icon: <HiOutlineQuestionMarkCircle />
	}
]