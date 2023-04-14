import { useContext } from "react";
import { ListContext } from "../../context/list/listContext";

import { AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";

import "./style.css"

const CardView = () => {

    const { setShowProfile, perfil, dataLista } = useContext(ListContext)

    const gender = perfil.gender +''

    return(
        <div className="modal">

            <div className="profile">

                <div className="container--sup">

                    <div className="sup--access">
                        <AiOutlineLeft className="sup--return" onClick={() => setShowProfile(false)}/>
                        <small className="sup--tittle">View Profile</small>
                        <AiOutlinePlus className="sup--more"/>
                    </div>

                    <img src={perfil.picture.large} className="sup--img"></img>

                    <div className="sup--personal--name">
                        <small className="sup--name">{perfil.name.first + " " + perfil.name.last}</small>
                        <small className="sup--country">{perfil.location.city + ", " + perfil.location.country}</small>
                    </div>

                </div>

                <div className="container--central">

                    <div className="central--followres">
                        <small className="central--number">{gender.toUpperCase()}</small>
                        <small className="central--text">GENDER</small>
                    </div>

                    <div className="central--following">
                        <small className="central--number">{perfil.dob.age}</small>
                        <small className="central--text--2">AGE</small>
                    </div>

                </div>
                
                <div className="container--inf">

                    <label>Email</label>
                    <small className="inf--Personal--info">{perfil.email}</small>
                    <hr/>
                    <label>Phone</label>
                    <small className="inf--Personal--info">{perfil.cell}</small>
                    <hr/>
                    <label>Twitter</label>
                    <small className="inf--Personal--info">@riantsilvi</small>
                    <hr/>
                    <label>Street</label>
                    <small className="inf--Personal--info">{perfil.location.street.name + ", " + perfil.location.street.number}</small>
                
                </div>

            </div>

        </div>
    )

}

export default CardView;