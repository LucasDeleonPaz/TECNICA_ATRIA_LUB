import { useContext } from "react";

import { ListProvider } from "../../context/list/listContext";

const CardPerson = () => {

    const { dataList } = useContext(ListProvider)

    console.log(dataList.data)

    return (


        <div>


        </div>

    )

}

export default CardPerson;
