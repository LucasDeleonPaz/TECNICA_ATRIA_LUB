import { useContext } from "react";
import { ListContext } from "../../context/list/listContext";

import { FaMars, FaVenus } from "react-icons/fa"


import "./style.css"

const CardPerson = ({data}) => {

    const { setShowProfile, showProfile, setPerfil} = useContext(ListContext)
    
    const capitalize = (name) => {
        return name.charAt(0).toUpperCase() + name.substr(1);
    }

    const selectProfile = () => {
        setShowProfile(!showProfile)
        setPerfil(data)
    }
   
    const birth = new Date (data.dob.date.slice(0,10))
    const month = parseInt(birth.getMonth())+1
    const birthDay = birth.getDate() +1 + "/" +  + month + "/" + birth.getUTCFullYear()

    return (

        <div className="card">  
            
            <div className="container--img">
                {data.gender === "male" ? <FaMars className="card--gender"/> : <FaVenus className="card--gender"/>}
            </div>

            <img className="card--img" src={data.picture.medium} alt="Imagem pessoal"/>

            <div className="card--persona--info">
                <small className="card--name">{capitalize(data.name.first) + " " + capitalize(data.name.last) }</small>

                <small className="card--birthday">{birthDay}</small>

                <small className="card--Phone">{data.phone}</small>
            </div>

            <button className="card--button--card" onClick={() => selectProfile()}>View Profile</button>

        </div>

    )

}

export default CardPerson;
