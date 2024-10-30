
// Nuestros types tienen que estar nombrados tal cual como viene en nuestro
// formulario
export type Patient = {
    id: string,
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
    maxLength: number
}

export type DraftPatient = Omit<Patient, 'id'>