import { useContext } from "react";
import { ListContext } from "../../context/list/listContext";

import { FaMars, FaVenus } from "react-icons/fa"


import "./style.css"

const CardPerson = ({key}) => {

    const { setShowProfile, showProfile, perfil} = useContext(ListContext)
    
    const capitalize = (name) => {
        return name.charAt(0).toUpperCase() + name.substr(1);
    }

    const profile = (retorno) => {

    }

    const dataList = {
        "results": [
        {
        "gender": "male",
        "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
        },
        "location": {
        "street": "9278 new road",
        "city": "kilcoole",
        "state": "waterford",
        "postcode": "93027",
        "coordinates": {
        "latitude": "20.9267",
        "longitude": "-7.9310"
        },
        "timezone": {
        "offset": "-3:30",
        "description": "Newfoundland"
        }
        },
        "email": "brad.gibson@example.com",
        "login": {
        "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
        "username": "silverswan131",
        "password": "firewall",
        "salt": "TQA1Gz7x",
        "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
        "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
        "sha256":
        "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
        },
        "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
        },
        "registered": {
        "date": "2002-05-21T10:59:49.966Z",
        "age": 17
        },
        "phone": "011-962-7516",
        "cell": "081-454-0666",
        "id": {
        "name": "PPS",
        "value": "0390511T"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "IE"
        }
        ],
        "info": {
        "seed": "fea8be3e64777240",
        "results": 1,
        "page": 1,
        "version": "1.3"
        }
    }

    
    
    const data = dataList.results[0]
    
    const birth = new Date (data.dob.date.slice(0,10))
    const month = birth.getMonth()
    const birthDay = birth.getDate() +1 + "/" +  + 1 + "/" + birth.getUTCFullYear()

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

            <button className="card--button--card" onClick={() => setShowProfile(!showProfile)}>View Profile</button>

        </div>

    )

}

export default CardPerson;
