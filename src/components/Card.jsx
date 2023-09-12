// export const Card = ({name, status, image, url}) => {
//     return <><div>
//         <img src={image}/>
//         <p>{name}</p>
//         <p>{status}</p>
//         <a href={url}></a>
//     </div>
//     </>
// }

export const Card = ({missionName, launchSuccess, launchDate, details, links}) => {
    const localDateFormat = new Date(launchDate).toLocaleString();
    console.log(missionName);
    return <>
  <div className="launches-card">
    <img src={links.mission_patch} alt="" className="launches-card__image"/>
    <div className="launches-card__text-wrapper">
      <h2 className="launches-card__title">{missionName}</h2>
      <div className="launches-card__launch-success">Launch successful: {launchSuccess? 'true' : 'false'}</div>
      <div className="launches-card__launch-date">Launch date: {localDateFormat}</div>
      <div className="launches-card__launch-details">{details}</div>
    </div>
  </div>
    </>
}