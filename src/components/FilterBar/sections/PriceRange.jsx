import React, { useContext, useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

import { Col, Row, Wrapp } from "../../../style/style";
import useDebounce from "../../../hooks/useDebounce";
import { filterGoodsByPrice } from "../../../helpers/filter";
import { GlobalContext } from "../../../context/context";

const PriceRange = () => {
    const { setGoods, setIsLoading } = useContext(GlobalContext);

    const [minValue, set_minValue] = useState(10);
    const [maxValue, set_maxValue] = useState(200);

    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    const minTrigger = useDebounce(minValue, 500);
    const maxTrigger = useDebounce(maxValue, 500);

    useEffect(() => {
        filterGoodsByPrice({
            minPrice: minTrigger,
            maxPrice: maxTrigger,
            setGoods,
            setIsLoading,
        });
    }, [minTrigger, maxTrigger, setGoods, setIsLoading]);

    return (
        <Wrapp>
            <div>Price Range Selected</div>
            <Row ai={"center"} jc={"space-between"} m={'12px 0 5px 0'}>
                <Col>${minValue}</Col> <Col>${maxValue}</Col>
            </Row>
            <MultiRangeSlider
                min={0}
                max={1000}
                step={1}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e);
                }}
                style={{
                    border: "none",
                    boxShadow: "none",
                    padding: "10px 0",
                }}
                label="false"
                ruler="false"
                thumbRightColor="#000"
                thumbLeftColor="#000"
                trackColor="#9B9B9B"
                thumbWidth={20}
                trackHeight={20}
                thumbBorderColor="#000"
                trackBorderColor="#9B9B9B"
                thumbBackgroundColor="#9B9B9B"
                trackBackgroundColor="#9B9B9B"
                barLeftColor="silver"
                barRightColor="silver"
                barInnerColor="#9B9B9B"
            />
        </Wrapp>
    );
};

export default PriceRange;
