import React from "react";
import { styled } from "styled-components";
import FilterBar from "./FilterBar/FilterBar";
import ListOfGoods from "./ListOfGoods";
import { Row } from "../style/style";

const MainStyled = styled(Row)`
    width: 90%;
    gap: 5px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Main = () => {
    return (
        <MainStyled>
            <FilterBar />
            <ListOfGoods />
        </MainStyled>
    );
};

export default Main;
