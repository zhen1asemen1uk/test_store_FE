import { useState, useEffect } from "react";

const useDebounce = (value, delay, setIsLoading) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        setIsLoading?.(true);
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
