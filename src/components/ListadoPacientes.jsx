import Paciente from "./Paciente"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

    return (
        <div className="md:w-7/12 w-11/12 mx-auto mt-10 md:mt-0">
            {
                (pacientes.length != 0) ? <h2 className="text-center font-extrabold text-3xl">Listado Pacientes</h2> : <h2 className="text-center font-extrabold text-3xl">No Hay Pacientes</h2>
            }
            <p className="text-center mt-5">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            <div className="mt-7 space-y-4">
                {
                    pacientes.map(paciente => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        ></Paciente>
                    ))
                }
            </div>
        </div>
    )
}

export default ListadoPacientes