import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"
import Overview from './views/Overview'
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
                <Route path="/overview" element={<Overview />} />
                <Route path="/patientlist" element={<RegisterPatient />} />
              </Route>
              <Route path="/adminview" element={<Overview />}/>
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
