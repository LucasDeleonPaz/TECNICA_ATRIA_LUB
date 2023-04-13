import { createContext, useEffect, useState  } from "react";
import axios from "axios";
import { api } from "../../services/api";

export const ListContext = createContext({});

export const ListProvider = ({ children }) => {

    const [dataLista, setDataList] = useState([])
    const [data, setData] = useState([])

    axios.all([
        axios.get('https://api.randomuser.me/?results=3'),
        axios.get('https://api.randomuser.me/?results=3'),
        axios.get('https://api.randomuser.me/?results=3')
        ]).then(axios.spread((cardOne, cardTwo, cardTree) => {
            setDataList({...cardOne,...cardTwo,...cardTree})
            setData(dataLista.data.results)
        }))

    return (
        <ListContext.Provider value={{dataLista, data}}>
            {children}
        </ListContext.Provider>
    )
};


