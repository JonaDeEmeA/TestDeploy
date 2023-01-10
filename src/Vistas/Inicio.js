import { useNavigate } from "react-router-dom"


export const Inicio=()=>{

    const navegar = useNavigate();
    const irDetalle=()=>{
        navegar("/detalle");
    };


    return(
        <>
            <h1>Vista INICIO</h1>
            <button onClick={irDetalle} >A DETALLE</button>
        </>
    )
}