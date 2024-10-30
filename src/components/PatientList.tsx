import { usePatientStore } from "../store/store"
import PatientDetails from "./PatientDetails"


export default function PatientList() {
  
  const patients = usePatientStore((state) => state.patients)

 return (
    <div  className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (

        <>
          <h2 className="text-center font-bold text-3xl">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus { ""}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>

          {patients.map(patient => (
            <PatientDetails
            key={patient.id}
            patient={patient}
            
            />
          ))}
        </>
        ) : (
        <>
        
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            comienza agregando pacientes { "" }
            <span className="text-indigo-600">y aparecen en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}
