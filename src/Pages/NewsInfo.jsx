import React from "react";
import { Link } from "react-router-dom";

const NewsInfo = ({ newsInfo }) => {
  // console.log(newsInfo);
  return (
    <div className="card bg-base-100 w-full shadow-lg">
      <figure className="px-10 pt-10">
        <img
          src={newsInfo.image_url}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body  text-start">
        <h2 className="card-title text-start">{newsInfo.title}</h2>
        <p>
          {newsInfo.details}
        </p>
        <div className="card-actions">
          <Link to={"/category/01"} className="btn btn-info text-white">Back To Category</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsInfo;
