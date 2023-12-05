import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"
import Overview from './views/Overview'
import LoginView from './views/LoginView'
import RegisterPatient from './views/RegisterPatient'
import RegisterDoctor from './views/RegisterDoctor'
import HealthReportCreate from './views/HealthReportCreate'
import Layout from './components/Layout'
import PatientPanel from './views/PatientPanel'
import DoctorPanel from './views/DoctorPanel'
import MedicalReportPanel from './views/MedicalReportPanel'
import PatientProfile from './views/PatientProfile'

function App() {
  return (
    <>
      <div>
        <Router>
          {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/overview" element={<Overview />} />
                <Route path="/patientpanel" element={<PatientPanel />} />
                <Route path="/doctorpanel" element={<DoctorPanel />} />
                <Route path="/medicalreportpanel" element={<MedicalReportPanel />} />
                <Route path="/patientprofile/:id" element={<PatientProfile />} />           
              </Route>
              <Route path="/adminview" element={<Overview />}/>
              <Route path="/login" element={<LoginView />}/>
              <Route path="/register_patient" element={<RegisterPatient />}/>
              <Route path="/register/doctor" element={<RegisterDoctor />}/>
              <Route path="/medicalreport/create" element={<HealthReportCreate />}/>
            </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
