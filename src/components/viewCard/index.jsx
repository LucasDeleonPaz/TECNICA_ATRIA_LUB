import { useContext } from "react";
import { ListContext } from "../../context/list/listContext";

import { AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";

import "./style.css"

const CardView = () => {

    const { setShowProfile, showProfile} = useContext(ListContext)

    return(
        <div className="modal">

            <div className="profile">

                <div className="container--sup">

                    <div className="sup--access">
                        <AiOutlineLeft className="sup--return" onClick={() => setShowProfile(false)}/>
                        <small className="sup--tittle">View Profile</small>
                        <AiOutlinePlus className="sup--more"/>
                    </div>

                    <img className="sup--img"></img>

                    <div className="sup--personal--name">
                        <small className="sup--name">Arianti Silva</small>
                        <small className="sup--country">Jakarta</small>
                    </div>

                </div>

                <div className="container--central">

                    <div className="central--followres">
                        <small className="central--number">44.895</small>
                        <small className="central--text">FOLLOWERS</small>
                    </div>

                    <div className="central--following">
                        <small className="central--number">31.372</small>
                        <small className="central--text--2">FOLLOWING</small>
                    </div>

                </div>
                
                <div className="container--inf">

                    <label>Email</label>
                    <small className="inf--Personal--info">hello@gmail.com</small>
                    <hr/>
                    <label>Phone</label>
                    <small className="inf--Personal--info">+62 890 123 456</small>
                    <hr/>
                    <label>Twitter</label>
                    <small className="inf--Personal--info">@riantsilvi</small>
                    <hr/>
                    <label>Behance</label>
                    <small className="inf--Personal--info">behance.net/riantisilve</small>
                
                </div>

            </div>

        </div>
    )

}

export default CardView;