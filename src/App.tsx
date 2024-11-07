import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
import { ToastContainer } from 'react-toastify'

// importacion de notificacion de react toastify
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    
    <img src="/backgroundImageMain.png" className="fixed -z-10 blur-xl bg-opacity-95 h-screen w-screen "/>
    
    <div className="container mx-auto h-screen mt-5">
     <h1 className='text-center md:w-2/3 md:mx-auto text-4xl gap-x-1 font-extrabold italic'>Pacientes{" "}
      <span className="text-blue-600"> Veterinaria</span>
     </h1>
  
    <div className="mt-12 md:flex">
     <PatientForm/>
     <PatientList/>
    </div>

    </div>
    <ToastContainer />
    </>
  )
}

export default App
