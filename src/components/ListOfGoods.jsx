import React, { useContext } from "react";
import { styled } from "styled-components";
import { GlobalContext } from "../context/context";

import Card from "./reusable/Card";
import { Wrapp } from "../style/style";

const Wrapper = styled(Wrapp)`
    flex: 1 1 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    gap: 16px;
`;

const ListOfGoods = () => {
    const { goods, isLoading } = useContext(GlobalContext);

    if (isLoading) <div>Loading...</div>;
    if (goods.length === 0) <div>Goods not found</div>;

    return (
        <Wrapper>
            {goods.map((good) => (
                <Card key={good._id} good={good} />
            ))}
        </Wrapper>
    );
};

export default ListOfGoods;
