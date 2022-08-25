import { Container, Divider } from "@material-ui/core";
import React from "react";
import NewsCard from "../cards/NewsCard";
import "./newscontent.css";

const NewsContent = ({ data }) => {
  const { articles } = data;
  return (
    <Container maxWidth="md">
      <div className="content">
        {/* <Card data={data} /> */}
        <div className="downloadMessage">
          For better experience please download our app from:
          <div>
            <img
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              alt="app store"
            />
            <img
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              alt="play store"
            />
          </div>
        </div>

        {articles?.map((newsitem) => {
          return <NewsCard key={newsitem.title} newsitem={newsitem} />;
        })}
      </div>
    </Container>
  );
};

export default NewsContent;
