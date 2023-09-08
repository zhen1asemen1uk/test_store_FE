import { createContext, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { getGoods } from "../helpers/goods";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [busket, setBusket] = useState([]);
    const [goods, setGoods] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const searchTrigger = useDebounce(search, 1000, setIsLoading);

    useEffect(() => {
        // goods logic
        setIsLoading(true);
        getGoods({ setGoods, setIsLoading });

        // busket logic
        const busket = localStorage.getItem("busket");
        if (busket) {
            setBusket(JSON.parse(busket) || []);
        }
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                busket,
                setBusket,
                goods,
                setGoods,
                search,
                setSearch,
                searchTrigger,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
