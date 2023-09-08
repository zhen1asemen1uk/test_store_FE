import React, { useContext, useEffect } from "react";
import { styled } from "styled-components";

import { Row } from "../../style/style";

import Button from "../reusable/Button";

import { GlobalContext } from "../../context/context";
import SearchInput from "../reusable/SearchInput";
import { searchHandler, searchByIdsHandler } from "../../helpers/search";

const Avatar = styled.img`
    width: 40px;
    height: 40px;
`;

const Red = styled.div`
    display: ${({ show }) => (!!show ? "block" : "none")};
    position: absolute;
    right: -25px;
    top: -15px;

    border-radius: 20px;
    padding: 1px 4px;

    background: red;
    color: white;
`;

const Header = () => {
    const { busket, setGoods, search, setSearch, searchTrigger, setIsLoading } =
        useContext(GlobalContext);

    useEffect(() => {
        searchHandler({ searchText: searchTrigger, setGoods, setIsLoading });
    }, [searchTrigger, setGoods, setIsLoading]);

    return (
        <Row ai={"center"} jc={"space-between"} h={"88px"} w={"90%"}>
            <img src="/images/logo.png" alt="logo" />

            <SearchInput
                placeholder={"Search"}
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                onClose={() => {
                    setSearch("");
                }}
            />

            <Button
                title={
                    <Row pos={"relative"} g={"7px"}>
                        Watch<Red show={busket.length}>{busket.length}</Red>
                    </Row>
                }
                onClick={() => {
                    searchByIdsHandler({
                        arrIds: busket,
                        setGoods,
                        setIsLoading,
                    });
                }}
            />
            <Avatar src="/images/Edward_Powlowski.png" alt="avatar" />
        </Row>
    );
};

export default Header;
