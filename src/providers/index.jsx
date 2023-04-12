import { ListProvider } from "../context/list/listContext";

const Providers = ({children}) => {
    
    return (

        <ListProvider>
            {children}
        </ListProvider>

    );

}

export default Providers;
