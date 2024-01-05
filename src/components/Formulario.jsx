import { useState, useEffect } from "react"
import Error from "./Error"

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validacion de formulario
        if([nombre, propietario, email, alta, sintomas].includes('')) {
            console.log('Hay almenos un campo vacio')
            setError(true)
            return
        }

        // Objeto de paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            alta, 
            sintomas,
            id: generarId()
        }

        setError(false)

        // Actualizar los datos de un paciente
        if(paciente.id) {
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

        // reiniciar formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }
    return (
        <div className="md:w-5/12 w-11/12 mx-auto">
            <h2 className="text-center font-extrabold text-3xl">Seguimiento Pacientes</h2>
            <p className="text-center mt-5">
                Añade Pacientes y {''} 
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form 
                className="bg-white px-5 py-10 rounded-lg shadow mt-7"
                onSubmit={handleSubmit}>
                { error && 
                    <Error></Error>
                }
                <div>
                    <label 
                        htmlFor="nombreMascota" 
                        className="uppercase text-slate-700 font-bold"
                        >nombre mascota</label>
                    <input 
                        type="text" 
                        id="nombreMascota" 
                        className="block w-full mt-2 p-2 border rounded-lg"
                        placeholder="Nombre de la Mascota"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        />
                </div>
                <div className="mt-4">
                    <label 
                        htmlFor="nombrePropietario" 
                        className="uppercase text-slate-700 font-bold"
                        >nombre propietario</label>
                    <input 
                        type="text" 
                        id="nombrePropietario" 
                        className="block w-full mt-2 p-2 border rounded-lg"
                        placeholder="Nombre del Propietario"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                        />
                </div>
                <div className="mt-4">
                    <label 
                        htmlFor="email" 
                        className="uppercase text-slate-700 font-bold"
                        >email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="block w-full mt-2 p-2 border rounded-lg"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                </div>
                <div className="mt-4">
                    <label 
                        htmlFor="alta" 
                        className="uppercase text-slate-700 font-bold"
                        >alta</label>
                    <input 
                        type="date" 
                        id="alta" 
                        className="block w-full mt-2 p-2 border rounded-lg"
                        value={alta}
                        onChange={e => setAlta(e.target.value)}
                        />
                </div>
                <div className="mt-4">
                    <label 
                        htmlFor="sintomas" 
                        className="uppercase text-slate-700 font-bold"
                        >síntomas</label>
                    <textarea 
                        id="sintomas" 
                        cols="30" 
                        rows="5"
                        className="block w-full border rounded-lg mt-2 p-2 resize-none"
                        placeholder="Síntomas de la Mascota"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                        ></textarea>
                </div>
                <input 
                    type="submit" 
                    className="w-full bg-indigo-600 mt-5 text-white rounded-lg cursor-pointer p-2 font-bold uppercase hover:bg-indigo-700 transition-all"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                    />
            </form>
        </div>
    )
}

export default Formulario