import { useEffect } from "react"

function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')

        if(respuesta){
            eliminarPaciente(paciente.id)
        }
    }

    return (
        <div className="bg-white px-5 py-10 rounded-lg shadow-md">
            <div className="space-y-3">
                <h1><span className="font-bold text-slate-700">Propietario:</span> {paciente.nombre}</h1>
                <h1><span className="font-bold text-slate-700">Mascota:</span> {paciente.propietario}</h1>
                <h1><span className="font-bold text-slate-700">Email:</span> {paciente.email}</h1>
                <h1><span className="font-bold text-slate-700">Fecha Alta:</span> {paciente.alta}</h1>
                <h1><span className="font-bold text-slate-700">Síntomas:</span> {paciente.sintomas}</h1>
            </div>

            <div className="md:flex gap-3 mt-5">
                <button 
                    className="md:w-1/2 w-full bg-indigo-600 p-2 rounded-lg text-white uppercase font-bold hover:bg-indigo-700 transition-all block"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button 
                    className="md:w-1/2 w-full mt-2 md:mt-0 bg-red-600 p-2 rounded-lg text-white uppercase font-bold hover:bg-red-700 transition-all"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente