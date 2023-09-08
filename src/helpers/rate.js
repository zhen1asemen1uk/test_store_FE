import StarSvg from "../components/reusable/svgs/StarSvg";

const getRate = (rateNum) => {
    const rateRounded = Math.round(rateNum);
    const arr = new Array(rateRounded).fill(0);
    const stars = arr.map((_, i) => <StarSvg key={i} />);

    return (
        <>
            {stars} {`${rateRounded}`}
        </>
    );
};

export default getRate;
