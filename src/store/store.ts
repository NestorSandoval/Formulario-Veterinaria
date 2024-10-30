import { create } from "zustand";
import { DraftPatient, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";
import { devtools } from "zustand/middleware"


// Todo esto un estado global que se va a usar para guardar los datos de los
// pacientes

type PatientState = {
    patients: Patient[]
    activeId: Patient["id"]
    addPatient: (date: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient["id"]) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4()}
}


export const usePatientStore = create<PatientState>()(
    devtools((set) => ({    
    // Estados
    patients: [],
    activeId: "",

    // Funciones
    addPatient: (date) => {
        const newPatient = createPatient(date)
        set((state) => ({
            patients: [
                ...state.patients, newPatient
            ]
        }))
    },

    deletePatient: (id) => {
        set((state) => ({
            patients: state.patients.filter(patient => patient.id !== id)
        }))
    },

    getPatientById: (id) => {
       set(() => ({
        activeId: id
       }))
    },   

    updatePatient: (data) => {
        set((state) => ({
            patients: state.patients.map(patient => patient.id === state.activeId ? {id: patient.id,
                ...data
             } : patient),
             
             activeId: ""
        }))
    }
})
))