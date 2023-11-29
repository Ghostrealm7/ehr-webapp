import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"
import AdminView from './views/AdminView'
import LoginView from './views/LoginView'
import RegisterPatient from './views/RegisterPatient'
import RegisterDoctor from './views/RegisterDoctor'
import HealthReportCreate from './views/HealthReportCreate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<AdminView />}/>
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
