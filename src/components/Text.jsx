export const Text = ({ name, country }) => {
  return <>
      <h1
        className="first-h1"
        style={{ backgroundColor: "lightsalmon", fontSize: "25px" }}
      >
        Cao DevLab React
      </h1>
      <h2 onClick={() => console.log("Cao")}>
        {name} <span>Miks</span> -{" "}
        <span style={{ fontStyle: "italic" }}>{country}</span>
      </h2>
      <p dangerouslySetInnerHTML={{ __html: "<b>Ponedjeljak</b>" }}></p>
    </>
};
