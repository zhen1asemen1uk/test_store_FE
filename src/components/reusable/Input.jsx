import styled from "styled-components";
import { Col } from "../../style/style";

const WrappInput = styled(Col)`
    cursor: default;
`;

const InputConteiner = styled.div`
    position: relative;
    border: none;
`;

const InputStyled = styled.input`
    width: 100%;

    padding: 8px 0px 8px 30px;

    background: #ededf0;

    border: none;

    border-radius: 20px;

    outline: none;
    transition: all 0.3s ease-in-out;

    /* cursor: ${({ disabled }) => (disabled ? `not-allowed` : `pointer`)}; */
`;

const Input = ({
    title = ``,

    onChange,
    value,

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
        <WrappInput h={h} w={w} p={p} m={m}>
            {title}
            <InputConteiner>
                <InputStyled
                    disabled={disabled}
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={disabled ? `Disabled` : placeholder}
                    type={type}
                    name={name}
                    maxLength={maxLength}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    step={step}
                    min={min}
                    max={max}
                    autoFocus={autoFocus}
                />
            </InputConteiner>
        </WrappInput>
    );
};

export default Input;
