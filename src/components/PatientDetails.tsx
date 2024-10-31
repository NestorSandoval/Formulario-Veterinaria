import { Patient } from "../types"
import PatientDetailsItems from "./PatientDetailsItems"
import { usePatientStore } from "../store/store"
import { toast } from "react-toastify"

type PatientDetailsProps = {
  patient: Patient
}


export default function PatientDetails({patient}: PatientDetailsProps) {

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error("Paciente eliminado correctamente")
    }

    const deletePatient = usePatientStore((state => state.deletePatient))
    const getPatientById = usePatientStore((state => state.getPatientById))

  return (
    <div className="mx-5 my-5 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailsItems label="ID" data={patient.id} />
        <PatientDetailsItems label="Nombre" data={patient.name} />
        <PatientDetailsItems label= "Propietario" data={patient.caretaker} />
        <PatientDetailsItems label="Email" data={patient.email} />
        <PatientDetailsItems label="Fecha Alta" data={patient.date.toString()} />
        <PatientDetailsItems label="Síntomas" data={patient.symptoms} />

        <div className="flex flex-col lg:flex-row justify-between mt-10 gap-3">
            <button 
            type="button"
            onClick={() => getPatientById(patient.id)}
            className="bg-green-600 text-white rounded-lg px-4 py-2">
                Editar
            </button>
            <button 
            type="button" 
            onClick={handleClick} 
            className="bg-red-600 text-white rounded-lg px-4 py-2">
                Eliminar
            </button>
        </div>
    </div>
  )
}
