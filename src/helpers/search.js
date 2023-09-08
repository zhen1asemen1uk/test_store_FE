const { REACT_APP_PORT, REACT_APP_HOST } = process.env;

export const searchHandler = async ({ searchText, setGoods, setIsLoading }) => {
    try {
        const response = await fetch(
            `${REACT_APP_HOST}${
                REACT_APP_PORT || ""
            }/api/goods/search?text=${searchText}`
        );
        const data = await response.json();

        setGoods(data);
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
};

export const searchByIdsHandler = async ({
    arrIds,
    setGoods,
    setIsLoading,
}) => {
    try {
        const response = await fetch(
            `${REACT_APP_HOST}${
                REACT_APP_PORT || ""
            }/api/goods/filter?array=${arrIds}`
        );
        const data = await response.json();

        setGoods(data);
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
};
