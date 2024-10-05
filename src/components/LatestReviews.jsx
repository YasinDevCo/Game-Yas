// جدیدترین نقد و بررسی ها
import React from "react";
import style from "./LatestReviews.module.css";
import pic from "./../assets/m1.png";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import QUERY_GET_GAMES_SLIDE from "../graphql/game";
function LatestReviews() {
  const { data, loading } = useQuery(QUERY_GET_GAMES_SLIDE);
  
  if (!loading) {
    return (
      <div className={style.items}>
        {data.gameTables.slice(-3).map((item) => (
          <div key={item.id} className={style.item}>
            <img src={item.image.url} alt="" />
            <div className={style.content}>
              <h4>ویدیو نقد و بررسی بازی </h4>
              <p>{item.title}</p>
              <Link to="/">
                <FaPlay color="var(--text-color)" size={22} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    <h3>loading</h3>;
  }
}

export default LatestReviews;
