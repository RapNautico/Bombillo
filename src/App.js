import react, { useEffect, useState } from "react";
// import img1 from './../imagenes/prendido.png';
// import img2 from './../imagenes/apagado.png';
import apagado from './imagenes/apagado.png';
import prendido from './imagenes/prendido.png';

export default function App(){
    //luz activa
    let [activo, setActivo] = useState(false);
    //contador
    let [con, setCon] = useState(0);
    //bombillo
    let [bom, setBom] = useState(false);

    const encender = ()=>{
      setActivo(!activo);
      if(activo === true){
            setCon(con+1);   
        }
        setBom(!bom);
    }
   /* useEffect(()=>{
        setCon(con);
    },[setCon]);*/

    console.log(activo);
    console.log(con);

    return(
      <>
        <div style={{display: "flex", justifyContent: "center" }}>
            <img src={bom === true ? apagado : prendido}/>
        </div>
        <hr/>
        <div style={{display: "flex", justifyContent: "center" }}>
          <p style={{padding: "20px", backgroundColor: "silver"}}>{con}</p>
          <button style={{ backgroundColor:"green", color:"white", padding: "10px", margin: "10px"}} onClick={encender}> encender </button>
          <button style={{ backgroundColor:"red", color:"white", padding: "10px", margin: "10px"}} onClick={encender}> apagar </button>
        </div>
      </>
    );
}