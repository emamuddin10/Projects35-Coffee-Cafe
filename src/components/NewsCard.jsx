

import { FaRegEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
    const {news}= props || {}
  return ( 
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img  src={news.thumbnail_url} alt="News Thumbnail" className="w-full h-96 rounded-none" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <img src={news.author.img} alt="Author" className="w-8 h-8 rounded-full" />
          <div>
            <h2 className="font-semibold">{news.author.name}</h2>
            <p className="text-xs text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        <h2 className="card-title text-lg">{news.title}</h2>
        <p className="text-sm text-gray-600">{news.details.slice(0, 100)}...</p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="font-bold">{news.rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaRegEye />
            <span>{news.total_view}</span>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/news/${news._id}`} className="btn btn-primary btn-sm">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
