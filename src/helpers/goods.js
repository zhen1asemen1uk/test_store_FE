const { REACT_APP_HOST, REACT_APP_PORT } = process.env;

export const getGoods = async ({ setGoods, setIsLoading }) => {
    try {
        const response = await fetch(
            `${REACT_APP_HOST}${REACT_APP_PORT}/api/goods`
        );
        const data = await response.json();

        setGoods(data);
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
};
