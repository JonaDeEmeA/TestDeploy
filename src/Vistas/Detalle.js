import { useNavigate } from "react-router-dom"


export const Detalle=()=>{

    const navegar = useNavigate();
    const irInicio=()=>{
        navegar("/");
    };


    return(
        <>
            <h1>Vista DETALLE NUevo</h1>
            <h1>Detalle x Erbin</h1>

            <button onClick={irInicio} >A INICIO</button>
        </>
    )
}