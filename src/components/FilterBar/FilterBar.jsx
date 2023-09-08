import React, { useContext } from "react";
import { styled } from "styled-components";

import { Col } from "../../style/style";

import PriceRange from "./sections/PriceRange";
import CustomerReviews from "./sections/CustomerReviews";
import Button from "../reusable/Button";
import { GlobalContext } from "../../context/context";
import { getGoods } from "../../helpers/goods";

const Wrapper = styled(Col)`
    min-width: 200px;
    gap: 20xp;

    transition: 1s;
`;

const FilterBar = () => {
    const { setGoods, setIsLoading } = useContext(GlobalContext);
    return (
        <Wrapper>
            <PriceRange />

            <CustomerReviews />

            <Button
                m={`10px 0 0 0`}
                title={"Clear"}
                onClick={() => {
                    getGoods({ setGoods, setIsLoading });
                }}
            />
        </Wrapper>
    );
};

export default FilterBar;
