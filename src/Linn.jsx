import Loendur from "./Loendur";

function Linn(props) {
    const linn = props.linn;

    const tervitus = "Tere tulemast Pariisi!";

    return (
        <div>
            <h2>{linn.nimi}</h2>
            {tervitus}
            <img className="linnPilt" src={linn.pilt} alt="" />
            <Loendur />
            <p>{linn.kirjeldus}</p>

        </div>
    )
}

export default Linn;

//{linn: {nimi: "Pariis", pilt: pariisImg, kirjeldus: "Pariis on Prantsusmaa pealinn ja üks maailma kuulsamaid linnu. See on tuntud oma ajalooliste monumentide, kunstigaleriide ja kultuurilise mitmekesisuse poolest."}}