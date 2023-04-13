import { useContext, useState } from "react";
import { ListContext } from "../../context/list/listContext";
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
                    <button className="card--button" onClick={() => addNewCard()}>ADD NEW</button>
                </div>
                {showCards && data[0].length === 2 ? 
                data[0]?.map((ele, index) => {
                    return <CardPerson key={index} data={ele}/>
                }) : 
                null}
            </div>
            {showProfile ? <CardView /> : null}           
        </div>

    )

}

export default ListPage;