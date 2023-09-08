import styled from "styled-components";

const WrappButton = styled.button`
    ${({ pos }) => pos && `position: ${pos}`};
    ${({ posT }) => posT && `top: ${posT}`};
    ${({ posL }) => posL && `left: ${posL}`};
    ${({ posR }) => posR && `right: ${posR}`};
    ${({ posB }) => posB && `bottom: ${posB}`};

    display: flex;
    justify-content: center;
    align-items: center;

    padding: ${({ p }) => p ?? `5px`};
    margin: ${({ m }) => m ?? `0`};

    background: transparent;

    border: 1px solid #9dc2ff;
    border-radius: 4px;

    font-style: normal;
    font-weight: ${({ fw }) => fw || 600};

    text-align: center;
    letter-spacing: 0.75px;

    text-transform: uppercase;
    text-decoration: ${({ td }) => td || `none`};

    color: #2264d1;

    font-size: 12px;

    transition: 0.2s;
    opacity: ${({ disabled }) => (disabled ? `0.5` : `1`)};
    cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    outline: none !important;

    ${({ flex }) => flex && `flex: ${flex};`}
    min-width: ${({ minW }) => minW || "88px"};

    height: ${({ h }) => h ?? `32px`};
    width: ${({ w }) => w ?? `auto`};
`;

const Button = ({
    title = `Button`,

    onClick,

    pos,
    posT,
    posL,
    posR,
    posB,

    secondary,

    h,
    w,
    p,
    m,

    fw,
    td,
    flex,
    minW,
    disabled,
    bgColor,
    as = `button`,
    type = `button`,
}) => {
    return (
        <WrappButton
            pos={pos}
            posT={posT}
            posL={posL}
            posR={posR}
            posB={posB}
            h={h}
            w={w}
            p={p}
            m={m}
            fw={fw}
            td={td}
            flex={flex}
            minW={minW}
            secondary={secondary}
            disabled={disabled}
            bgColor={bgColor}
            as={as}
            type={type}
            onClick={onClick}
        >
            {title}
        </WrappButton>
    );
};

export default Button;
