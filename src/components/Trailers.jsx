import style from "./Trailers.module.css";
import circleO from "./../assets/circle-oreng.svg";
import circleP from "./../assets/circle-purple.svg";
import QUERY_GET_TRAILERS from "../graphql/trailer";
import { useEffect, useState } from "react";
import { MdAddCircleOutline, MdMoreHoriz } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { useQuery } from "@apollo/client";
import { PlayPause, DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
function Trailers() {
  const { data, loading } = useQuery(QUERY_GET_TRAILERS);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4); // تعداد تریلرهای نمایش داده شده
  const [showAll, setShowAll] = useState(false); // وضعیت نمایش بیشتر/کمتر
  const [model, setModel] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);
  // تنظیم ویدیو پیش‌فرض به اولین ویدیو
  if (data && !currentVideo) {
    setCurrentVideo(data.trailerTables[0]);
  }

  const handleToggleShow = () => {
    setShowAll(!showAll); // تغییر وضعیت نمایش بیشتر/کمتر
    setVisibleCount(showAll ? 4 : data.trailerTables.length); // تعداد تریلرها را تنظیم کنید
  };
  const showMovie = () => {
    // setShow(true);
  };
  if (!loading) {
    return (
      <div className={style.container}>
        <div className={style.video}>
          {show && (
            <div className={style.videoShow}>
              <Video
                
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                poster={currentVideo?.image.url}
                // autoPlay
              >
                <source src={currentVideo?.trailers.url} type="video/mp4" />
              </Video>
            </div>
          )}
          <img
            className={style.videoItem}
            src={currentVideo?.image.url}
            alt=""
          />
          <Link className={style.play} to="/" onClick={showMovie}>
            <FaPlay color="var(--text-color)" size={32} />
          </Link>
          <div className={style.text}>
            <p>{currentVideo?.title}</p>
            <p>{currentVideo?.short_description}</p>
          </div>

          <div className={style.more}>
            <div>
              <span>
                <span className={style.none}>افزودن به لیست علاقه‌مندی‌ها</span>{" "}
                <MdAddCircleOutline size={22} />
              </span>
              <span>
                <span className={style.none}>اشتراک‌گذاری </span>
                <RiShareForwardLine size={22} />
              </span>
              <span>
                <span className={style.none}> پسندیدم </span>
                <AiOutlineLike size={22} />
              </span>
            </div>
            <button>
              <MdMoreHoriz size={35} />
            </button>
          </div>
        </div>

        {/* لیست تریلرها */}
        <div className={style.containerItem}>
          {data?.trailerTables.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className={style.itemTrailer}
              onClick={() => setCurrentVideo(item)} // تغییر ویدیو با کلیک
            >
              <img className={style.img} src={item.image.url} alt="" />

              <div className={style.content}>
                <p>{item.title}</p>
                <div className={style.show}>
                  <span>
                    {item.views} بازدید <img src={circleO} alt="circle" />
                  </span>
                  <span>
                    دو روز پیش <img src={circleP} alt="circle" />
                  </span>
                </div>
                <div className={style.create}>
                  <img src={item.publisherAvatar?.url} alt="" />
                  <span>منتشر کننده: {item.publisher}</span>
                </div>
              </div>
              <span className={style.time}>{item.duration}</span>
            </div>
          ))}
        </div>

        <button className={style.showMore} onClick={handleToggleShow}>
          {showAll ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </button>
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
}

export default Trailers;
