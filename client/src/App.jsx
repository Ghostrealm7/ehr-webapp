import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"
import AdminView from './views/AdminView'
import LoginView from './views/LoginView'
import RegisterPatient from './views/RegisterPatient'
import RegisterDoctor from './views/RegisterDoctor'
import HealthReportCreate from './views/HealthReportCreate'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/overview" element={<AdminView />} />
                <Route path="/patientlist" element={<AdminView />} />
              </Route>
              <Route path="/adminview" element={<AdminView />}/>
              <Route path="/login" element={<LoginView />}/>
              <Route path="/register/patient" element={<RegisterPatient />}/>
              <Route path="/register/doctor" element={<RegisterDoctor />}/>
              <Route path="/healthreport/create" element={<HealthReportCreate />}/>
            </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
