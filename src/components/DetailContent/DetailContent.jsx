import { useEffect, useState } from "react";
import DetailContentSideBar from "../DetailArticleSidebar/DetailArticleSidebar";
import DetailAuthorSideBar from "../DetailAuthorSidebar/DetailAuthorSidebar";
import "./style.scss";
import { getData } from "../../helpers";

export default function DetailContent(props) {
  const [authorData, setAuthorData] = useState(null);
  // console.log(props);

  useEffect(() => {
    if (!props.item?.authorId || props.type !== "magazine") return;
    getData().then((res) => {
      const author = res?.authors?.find(
        (athr) => +athr.id === +props.item.authorId
      );
      setAuthorData(author || null);
    });
  }, [props]);

  useEffect(() => {
    if (!props.item || props.type !== "author") return;
    setAuthorData(props.item || null);
  }, [props]);

  return (
    <section className="detail-content">
      {props.type === "magazine" && (
        <>
          <DetailContentSideBar
            authorData={authorData}
            articleData={props.item}
            type={props.type}
          />
          <ul className="detail-content-text">
            {props.item?.content?.mainText &&
              props.item?.content.mainText.map((text, index) => {
                if (text.medium) {
                  return (
                    <li key={index}>
                      <p className="medium">{text.medium}</p>
                    </li>
                  );
                } else if (text.normal) {
                  return (
                    <li key={index}>
                      <p className="normal">{text.normal}</p>
                    </li>
                  );
                } else if (text.quote) {
                  return (
                    <li key={index}>
                      <div className="quote-block">
                        <div className="quotation">“</div>
                        <blockquote>
                          {text.quote.text}
                          <span className="quote-author">
                            {text.quote.author}
                          </span>
                        </blockquote>
                      </div>
                    </li>
                  );
                }
              })}
          </ul>
        </>
      )}
      {props.type === "author" && (
        <>
          <DetailAuthorSideBar authorData={authorData} />
          <ul className="detail-content-text author-biography">
            <li className="main-info">
              <hgroup>
                <h2>{authorData?.name}</h2>
                <p className="about">{authorData?.about}</p>
              </hgroup>
            </li>
            {props.item?.biography &&
              props.item?.biography.map((text, index) => {
                if (text.medium) {
                  return (
                    <li key={index}>
                      <p className="medium">{text.medium}</p>
                    </li>
                  );
                } else if (text.normal) {
                  return (
                    <li key={index}>
                      <p className="normal">{text.normal}</p>
                    </li>
                  );
                } else if (text.quote) {
                  return (
                    <li key={index}>
                      <div className="quote-block">
                        <div className="quotation">“</div>
                        <blockquote>
                          {text.quote.text}
                          <span className="quote-author">
                            {text.quote.author}
                          </span>
                        </blockquote>
                      </div>
                    </li>
                  );
                }
              })}
          </ul>
        </>
      )}
      {props.type === "podcast" && (
        <>
          <DetailContentSideBar
            podcastData={props.item}
            type={props.type}
            episodeNum={props.item?.epNum}
          />
          <ul className="detail-content-text">
            {props.item?.name && (
              <li className="podcast-info">
                {props.item?.epNum && (
                  <span className="episode-number">
                    Episode {props.item.epNum}
                  </span>
                )}
                <h2>{props.item.name}</h2>
              </li>
            )}
            {props.item?.description && (
              <li
                className="description"
                dangerouslySetInnerHTML={{
                  __html: props.item.html_description,
                }}
              ></li>
            )}
          </ul>
        </>
      )}
    </section>
  );
}
