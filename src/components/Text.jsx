export const Text = ({ name="Aleksa", country="Poland" }) => {
    return <>
        <h1 htmlFor="saf" className='first-h1' style={{ backgroundColor: "lightsalmon", fontSize: 48 }}>Cao DevLab React JS Ekipo! 2023</h1>
        <h2>{name} <span>Miks</span> - <span style={{ fontStyle: "italic" }}>{country}</span></h2>
        <p dangerouslySetInnerHTML={{ __html: "<b>Ponedeljak</b>" }}></p>
        </>
}