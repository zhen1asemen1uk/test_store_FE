const { REACT_APP_HOST, REACT_APP_PORT } = process.env;

export const filterGoodsByPrice = async ({
    minPrice,
    maxPrice,
    setGoods,
    setIsLoading,
}) => {
    try {
        const response = await fetch(
            `${REACT_APP_HOST}${REACT_APP_PORT}/api/goods/filter?minPrice=${minPrice}&maxPrice=${maxPrice}`
        );
        const data = await response.json();

        setGoods(data);
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
};

export const filterGoodsByRate = async ({ rate, setGoods, setIsLoading }) => {
    try {
        const response = await fetch(
            `${REACT_APP_HOST}${REACT_APP_PORT}/api/goods/filter?rate=${rate}`
        );
        const data = await response.json();

        setGoods(data);
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
};
