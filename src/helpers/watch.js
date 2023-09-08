export const getGoodsFromLocalStorage = () => {
    // Get the existing busket from localStorage or create an empty array
    const existingBusket = JSON.parse(localStorage.getItem("busket") || "[]");

    return existingBusket;
};

// temporary solution
export const handleWatch = ({
    setIsWatched,
    isWatched,
    setBusket,
    busket,
    good,
}) => {
    setIsWatched(!isWatched);

    // Get the existing busket from localStorage or create an empty array
    const existingBusket = getGoodsFromLocalStorage();

    // Check if the good is already in the busket
    const goodIndex = existingBusket.findIndex((item) => item === good._id);

    if (goodIndex === -1) {
        // If the good is not in the busket, add it
        existingBusket.push(good._id);
        setBusket((busket) => busket.concat(good._id));
    } else {
        // If the good is already in the busket, remove it
        existingBusket.splice(goodIndex, 1);

        setBusket((busket) => busket.filter((item) => item !== good._id));
    }

    // Save the updated busket to localStorage
    localStorage.setItem("busket", JSON.stringify(existingBusket));
};
