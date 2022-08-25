import React from "react";
import "./newscard.css";
const NewsCard = ({ newsitem }) => {
  return (
    <div className="newscard">
      <img
        src={
          newsitem?.thumbnail
            ? newsitem?.thumbnail
            : "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="
        }
        alt={newsitem?.title}
        className="newsimage"
      />
      <div className="newstext">
        <div className="uppertext">
          <span className="title">{newsitem?.title}</span>
          <span className="author">
            <a
              href={newsitem.link}
              style={{ textDecoration: "none", color: "black" }}
            >
              <b> Short </b>
            </a>{" "}
            by {newsitem?.source.title ? newsitem.source.title : "unknown"} at{" "}
            {newsitem?.published_date}
          </span>
        </div>
        <div className="lowertext">
          <div className="desc">
            {newsitem?.desc ? newsitem?.desc : newsitem.title.repeat(3)}...
          </div>
          <span className="readmore">
            read more at{" "}
            <a
              href={newsitem.link}
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              {newsitem.source.title}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
