import { useNavigate } from "react-router-dom"


export const Detalle=()=>{

    const navegar = useNavigate();
    const irInicio=()=>{
        navegar("/inicio");
    };


    return(
        <>
            <h1>Vista DETALLE</h1>
            <button onClick={irInicio} >A INICIO</button>
        </>
    )
}