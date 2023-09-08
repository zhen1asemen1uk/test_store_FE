import React from "react";

function BlueStarSvg({ isActive }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 14 14"
        >
            <path
                fill="#2979FF"
                stroke={isActive ? "#2979FF" : "none"}
                d="M7.07 11.585l-.07.07-.077-.07C3.598 8.568 1.4 6.573 1.4 4.55c0-1.4 1.05-2.45 2.45-2.45 1.078 0 2.128.7 2.499 1.652h1.302C8.022 2.8 9.072 2.1 10.15 2.1c1.4 0 2.45 1.05 2.45 2.45 0 2.023-2.198 4.018-5.53 7.035zM10.15.7A4.21 4.21 0 007 2.156 4.21 4.21 0 003.85.7C1.694.7 0 2.387 0 4.55c0 2.639 2.38 4.802 5.985 8.071L7 13.545l1.015-.924C11.62 9.352 14 7.189 14 4.55 14 2.387 12.306.7 10.15.7z"
            ></path>
        </svg>
    );
}

export default BlueStarSvg;
