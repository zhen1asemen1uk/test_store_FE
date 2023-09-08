import styled from "styled-components";
import { Col } from "../../style/style";

import Input from "./Input";

import Zoom from "./svgs/ZoomSvg";
import Close from "./svgs/CloseSvg";

const WrappInput = styled(Col)`
    position: relative;
    max-width: 670px;
    width: 100%;
`;

const ZoomConteiner = styled.div`
    position: absolute;
    top: 8px;
    left: 10px;
`;

const CloseConteiner = styled.div`
    position: absolute;
    top: 8px;
    right: 15px;

    cursor: pointer;
`;

const SearchInput = ({
    title = ``,

    onChange,
    value,

    onClose,
    id,
    type,
    name,
    h,
    w,
    p,
    m,
    placeholder,
    disabled,
    maxLength,
    onMouseDown,
    onMouseUp,
    onFocus,
    onBlur,
    step,
    min,
    max,
    autoFocus = false,
}) => {
    return (
        <WrappInput>
            <Input
                h={h}
                w={"95%"}
                p={p}
                m={m}
                placeholder={placeholder}
                disabled={disabled}
                maxLength={maxLength}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onFocus={onFocus}
                onBlur={onBlur}
                step={step}
                min={min}
                max={max}
                autoFocus={autoFocus}
                title={title}
                onChange={onChange}
                onClose={onClose}
                value={value}
                id={id}
                type={type}
                name={name}
            />
            <ZoomConteiner>
                <Zoom />
            </ZoomConteiner>
            <CloseConteiner onClick={onClose}>
                <Close />
            </CloseConteiner>
        </WrappInput>
    );
};

export default SearchInput;
