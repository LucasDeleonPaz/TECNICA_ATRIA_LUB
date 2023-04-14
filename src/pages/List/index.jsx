import { useContext, useState } from "react";
import { ListContext } from "../../context/list/listContext";

import { AiOutlinePlus } from "react-icons/ai";

import "./style.css"

import CardPerson from "../../components/card";
import CardView from "../../components/viewCard";


const ListPage = () => {
    
    const { dataLista, setShowProfile, showProfile} = useContext(ListContext)

    const [showCards, setShowCards] = useState(false)
    const [data, setData] = useState([])
    
    const addNewCard = () => { 
        setShowCards(true)
        setData([dataLista.data.results]);
    }

    return (

        <div className="pageList">
            <div className={data.length >0 ? "container" : "container--2"}>
                <div className="pageList--card--button">
                    <AiOutlinePlus className="card--button" onClick={() => addNewCard()}/>
                    <small className="card--button--text">ADD NEW</small>
                </div>
                {showCards ? 
                data[0]?.map((ele, key) => {
                    return <CardPerson key={key} data={ele}/>
                }) : 
                null}
            </div>
            {showProfile ? <CardView /> : null}           
        </div>

    )

}

export default ListPage;