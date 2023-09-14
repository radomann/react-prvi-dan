export const Card = ({ name, status, image, location, url }) => (
    <article className="characterCard__Wrapper-sc-1ejywvi-0 bEklxv">
        <div className="characterCard__ImgWrapper-sc-1ejywvi-1 fkUcVI">
            <img
                src={image}
                alt={name}
            />
        </div>
        <div className="characterCard__ContentWrapper-sc-1ejywvi-2 isMAic">
            <div className="section">
                <a
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR"
                >
                    <h2>{name}</h2>
                </a>
                <span className="status">
                    <span className="status__icon"></span> {status}
                </span>
            </div>
            <div className="section">
                <span className="text-gray">Last known location:</span>
                <a
                    href={location.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR"
                >
                   {location.name}
                </a>
            </div>
        </div>
    </article>
);