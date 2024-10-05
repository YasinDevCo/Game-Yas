import style from "./NewContent.module.css";
import pic from "./testPic/test.webp";
import circleP from "./../assets/circle-purple.svg";
import { Link } from "react-router-dom";
import SearchFilter from "./module/SearchFilter";
import { useQuery } from "@apollo/client";
import QUERY_GET_GAMES_SLIDE from "../graphql/game";

function NewContent() {
  const { data, loading, error } = useQuery(QUERY_GET_GAMES_SLIDE);
  if (!loading) {
    return (
      <div className={style.content}>
        <div className={style.contentHeader}>
          <h2 className={style.title}>جدیدترین بازی های فروشگاه</h2>
          <SearchFilter />
        </div>
        <div className={style.items}>
        
         {data?.gameTables.slice(-4).map((item) => (
            <div key={item.id} className={style.item}>
              <img className={style.img} src={item.image.url} alt="" />
              <div className={style.info}>
                <h4>{item.title}</h4>
                <span>قیمت {item.price} هزار تومان</span>
              </div>
              <div className={style.liner}></div>
              <div className={style.sell}>
                <span>
                  <img src={circleP} alt="" />
                  {item.purchase_count} نفر خرید کرده اند
                </span>
                <button>
                  <Link to="/">خرید</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <h3>loading</h3>;
  }
}

export default NewContent;
