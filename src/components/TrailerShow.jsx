import React from "react";
import style from "./TrailerShow.module.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import movie from "./testPic/Call of Duty_ Black Ops 6 - Open Beta Trailer.mp4";
import thump from "./testPic/hqdefault.jpg";
import { MdAddCircleOutline, MdMore, MdMoreHoriz } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
function TrailerShow() {
  return (
    <div className={style.video}>
      <Video
        className={style.videoItem}
        muted
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        poster={thump}
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src={movie} type="video/webm" />
      </Video>

      <div className={style.text}>
        <p>تریلر رسمی بازی Metal Gear Solid Delta: Snake Eater</p>
        <p>
          شایعه ساخت Metal Gear Solid Delta: Snake Eater قوت گرفت. طبق گفته ها و
          نشریات وابسته به استودیو های سازنده این عنوان خاطره انگیز، خبر های
          خوبی از ساخت نسخه ریمیک و یا همان بهبود یافته در راه است.
        </p>
      </div>

      <div className={style.more}>
        <div>
          <span>
            افزودن به لیست علاقه مندی ها <MdAddCircleOutline size={22} />
          </span>
          <span>
            اشتراک گذاری <RiShareForwardLine size={22} />
          </span>
          <span>
            پسندیدم <AiOutlineLike size={22} />
          </span>
        </div>
        <button>
          <MdMoreHoriz size={35} />
        </button>
      </div>    
    </div>
  );
}

export default TrailerShow;
