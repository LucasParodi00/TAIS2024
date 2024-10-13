
import './spinner.css'


export const Spinner = ({ texto = 'Cargando Formulario' }) => {
    return (
        <div className="contenedor-sppiner" id='sppiners'>
            <div className="spinner"
                role="status"
                aria-live="polite"
                aria-label="cargando"
            >

            </div>
            <span>{texto} </span>
        </div>
    )
}