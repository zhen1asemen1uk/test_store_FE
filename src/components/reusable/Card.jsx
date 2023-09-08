import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/context";

import Button from "./Button";

import BlueStarSvg from "./svgs/BlueStarSvg";

import getRate from "../../helpers/rate";

import { Col, Row } from "../../style/style";
import { handleWatch } from "../../helpers/watch";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    max-width: 300px;
    width: 100%;
    max-height: 470px;

    border: 1px solid silver;
    border-radius: 5px;

    padding: 15px;
`;
const Image = styled.img`
    width: 227px;
    height: 224px;
    margin: 0 0 12px 0;
`;

const Title = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.0275em;
    text-align: left;
`;

const Cost = styled.div`
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
`;

const Descr = styled.div`
    //styleName: Inter / Body Small;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.018em;
    text-align: left;
    color: #787885;
`;

const Rate = styled.div`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
`;

const Watch = styled.div``;

const Card = ({ good }) => {
    const { busket, setBusket } = useContext(GlobalContext);

    const [isWatched, setIsWatched] = useState(false);

    useEffect(() => {
        // const busket = localStorage.getItem("busket") || [];

        busket.includes(good._id) ? setIsWatched(true) : setIsWatched(false);
    }, [busket, good]);

    return (
        <Wrapper>
            <Image src={good.image} alt={good.name} />

            <Col g={"8px"}>
                <Title>{good.name}</Title>
                <Cost>${good.price}</Cost>
                <Descr>{good.description}</Descr>
                <Row jc={"space-between"}>
                    <Rate>{getRate(good.rate)}</Rate>
                    <Watch
                        onClick={() =>
                            handleWatch({
                                setIsWatched: setIsWatched,
                                isWatched: isWatched,
                                setBusket: setBusket,
                                busket: busket,
                                good: good,
                            })
                        }
                    >
                        <Button
                            title={
                                <Row g={"7px"}>
                                    <BlueStarSvg isActive={isWatched} />
                                    Watch
                                </Row>
                            }
                        />
                    </Watch>
                </Row>
            </Col>
        </Wrapper>
    );
};

export default Card;
