import { useLoaderData } from "react-router-dom";
import NewsDetail from "../components/NewsCard";

const CategoryNews = () => {
    const {data: arrayNews} = useLoaderData()
    console.log(arrayNews)
    return (
        <div>
            <h1 className="font-bold">Dragon News Home</h1>
            <h1>{arrayNews.length} News Here This category</h1>
            <div>
                {
                    arrayNews.map(news=><NewsDetail news={news} key={news.category_id}></NewsDetail>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;