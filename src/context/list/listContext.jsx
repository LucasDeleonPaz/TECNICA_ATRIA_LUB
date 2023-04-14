import { createContext, useState  } from "react";
import axios from "axios";

export const ListContext = createContext({});

export const ListProvider = ({ children }) => {

    const [dataLista, setDataList] = useState([])
    const [data, setData] = useState([])
    const [showProfile, setShowProfile] = useState(false)
    const [perfil, setPerfil] = useState()

    axios.all([
        axios.get('https://api.randomuser.me/?results=3'),
        axios.get('https://api.randomuser.me/?results=3'),
        axios.get('https://api.randomuser.me/?results=3')
        ]).then(axios.spread((cardOne, cardTwo, cardTree) => {
            setDataList({...cardOne,...cardTwo,...cardTree})
            setData(dataLista.data.results)
        }))

    return (
        <ListContext.Provider value={{dataLista, data, setShowProfile, showProfile, setPerfil, perfil}}>
            {children}
        </ListContext.Provider>
    )
};


