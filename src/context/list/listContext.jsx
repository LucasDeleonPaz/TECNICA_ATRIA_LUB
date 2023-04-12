import { createContext, useEffect, useState  } from "react";

import { api } from "../../services/api";

export const ListContext = createContext({});

export const ListProvider = () => {

    const [dataList, setDataList] = useState({})

    useEffect(()=> {
        api
            .get("")
            .then((res) => {
                setDataList(res);
            })
            .catch((e) => console.error(e))
    }, dataList)

    return (
        <ListContext.Provider value={{dataList, setDataList}}/>
    )

};


