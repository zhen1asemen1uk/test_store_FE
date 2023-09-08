import React, { useContext } from "react";
import StarSvg from "../../reusable/svgs/StarSvg";
import styled from "styled-components";
import { Col, Row } from "../../../style/style";
import { filterGoodsByRate } from "../../../helpers/filter";
import { GlobalContext } from "../../../context/context";

const array = [4, 3, 2, 1];

const Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f4f4;

    border-radius: 5px;

    font-size: 10px;
    padding: 5px 10px;
    cursor: pointer;
`;

const BtnWrapper = styled(Row)`
    flex-wrap: wrap;
    gap: 5px;
`;

const CustomerReviews = () => {
    const { setGoods, setIsLoading } = useContext(GlobalContext);

    const countStars = (count) => {
        return new Array(count).fill(0).map((_, i) => <StarSvg key={i} />);
    };

    return (
        <Col>
            <Col m={"12px 0 5px 0"}>CustomerReviews</Col>
            <BtnWrapper>
                {array.map((item, index) => {
                    return (
                        <Btn
                            key={index}
                            onClick={() => {
                                filterGoodsByRate({
                                    rate: item,
                                    setGoods,
                                    setIsLoading,
                                });
                            }}
                        >
                            {countStars(item)} & Up
                        </Btn>
                    );
                })}
            </BtnWrapper>
        </Col>
    );
};

export default CustomerReviews;
