import React, { useState } from "react";
import style from "./Articles.module.css";
import pic1 from "./../assets/m2.png";
import pic2 from "./../assets/m3.png";
import circleO from "./../assets/circle-oreng.svg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useQuery } from "@apollo/client";
import QUERY_GET_ARTICLE from "../graphql/article";

function Articles() {
  const { data, loading } = useQuery(QUERY_GET_ARTICLE);

  if (!loading) console.log(data.articleTables);

  const articles = [
    {
      id: 1,
      category: ["اکشن", "ورزشی", "ماجراجویی"],
      title: "بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.",
      img: pic1,
      readers: 200,
      alt: "تصویر بازی NBA 2K 2023",
      description:
        "NBA 2K 2023 یکی از بهترین بازی‌های ورزشی در زمینه بسکتبال است که با گرافیک عالی و گیم‌پلی واقع‌گرایانه، توانست رکورد فروش را در جهان بشکند.",
    },
    {
      id: 2,
      category: ["اکشن", "تیراندازی"],
      title: "بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.",
      img: pic2,
      readers: 240,
      alt: "تصویر بازی NBA 2K 2023",
      description:
        "این بازی ویژگی‌های جدیدی از جمله حرکات واقع‌گرایانه‌تر بازیکنان و حالت‌های جدید بازی مانند MyCareer و MyTeam را ارائه داده که باعث جذب طرفداران بیشتر شده است.",
    },
    {
      id: 3,
      category: ["ورزشی", "استراتژی"],
      title: "بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.",
      img: pic1,
      readers: 100,
      alt: "تصویر بازی NBA 2K 2023",
      description:
        "با بهبودهای چشمگیر در گرافیک و گیم‌پلی، NBA 2K 2023 نه تنها تجربه‌ای هیجان‌انگیزتر از نسخه‌های قبلی ارائه می‌دهد، بلکه به یکی از پرفروش‌ترین بازی‌های ورزشی تبدیل شده است.",
    },
    {
      id: 4,
      category: ["ورزشی", "استراتژی"],
      title: "بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.",
      img: pic1,
      readers: 100,
      alt: "تصویر بازی NBA 2K 2023",
      description:
        "با بهبودهای چشمگیر در گرافیک و گیم‌پلی، NBA 2K 2023 نه تنها تجربه‌ای هیجان‌انگیزتر از نسخه‌های قبلی ارائه می‌دهد، بلکه به یکی از پرفروش‌ترین بازی‌های ورزشی تبدیل شده است.",
    },
  ];

  // مدیریت ایندکس مقاله فعلی
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  // توابع جابجایی بین مقالات
  const handleNextArticle = () => {
    if (currentArticleIndex < data.articleTables.length - 1) {
      setCurrentArticleIndex(currentArticleIndex + 1);
    }
  };

  const handlePreviousArticle = () => {
    if (currentArticleIndex > 0) {
      setCurrentArticleIndex(currentArticleIndex - 1);
    }
  };

  if(!loading){
    return (
      <div className={style.article}>
        <div className={style.showArticle}>
          <img
            src={data.articleTables[currentArticleIndex].image.url}
            alt={data.articleTables[currentArticleIndex].title}
          />
          <div className={style.content}>
            <div className={style.cate}>
              {/* {data.articleTables[currentArticleIndex].category.map((cat, index) => (
                <span key={index}>{cat}</span>
              ))} */}
              {data.articleTables[currentArticleIndex].category
                .split(" ")
                .map((cat, index) => (
                  <span key={index} style={{ marginRight: "5px" }}>
                    {cat}
                  </span>
                ))}
            </div>
            <h4>{data.articleTables[currentArticleIndex].title}</h4>
            <p>
              {data.articleTables[currentArticleIndex].summary
                .split(" ")
                .slice(0, 25)
                .join(" ")}
              {data.articleTables[currentArticleIndex].summary.split(" ").length >
                25 && "..."}
            </p>
            <button>مشاهده مقاله</button>
          </div>
          <div className={style.liner}></div>
          <div className={style.arrow}>
            <span onClick={handlePreviousArticle} style={{ cursor: "pointer" }}>
              <FiArrowRight
                size={18}
                color="var(--bg-color)"
                style={{
                  opacity: currentArticleIndex === 0 ? 0.5 : 1,
                }}
              />
            </span>
            <span onClick={handleNextArticle} style={{ cursor: "pointer" }}>
              <FiArrowLeft
                size={18}
                color="var(--bg-color)"
                style={{
                  opacity:
                    currentArticleIndex === data.articleTables.length - 1
                      ? 0.5
                      : 1,
                }}
              />
            </span>
          </div>
        </div>
  
        <div className={style.showArticles}>
          {/* فقط سه مقاله آخر را نمایش دهید */}
          {data.articleTables.slice(-3).map((article) => (
            <div key={article.article_id} className={style.itme}>
              <img
              style={{objectFit:"cover"}}
                className={style.img}
                src={article.image.url}
                alt={article.title}
              />
              <div className={style.content}>
                <div className={style.cate}>
                  {article.category.split(" ").map((cat, index) => (
                    <span key={index} style={{ marginRight: "5px" }}>
                      {cat}
                    </span>
                  ))}
                </div>
                <h4>{article.title}</h4>
                <div>
                  <img src={circleO} alt="آیکون خوانده شده" />
                  <span>{article.viewCount} نفر این مقاله را خوانده اند.</span>
                </div>
                <button>مشاهده مقاله</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }else{
    <h1>loading</h1>
  }
}

export default Articles;
