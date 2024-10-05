import React from "react";
import style from "./TrailerItem.module.css";
import pic from "./testPic/test.webp"
import circleO from "./../assets/circle-oreng.svg"
import circleP from "./../assets/circle-purple.svg"
function TrailerItem() {
  return (
    <div className={style.containerItem}>
      <div className={style.itemTrailer}>
        <img className={style.img} src={pic} alt="" />
        <div className={style.content}>
          <p>تریلر نسخه جدید Call Of Duty Mobile</p>
          <div className={style.show}>
            <span>۲۱ بازدید <img src={circleO} /> </span>
            <span>دو روز پیش <img src={circleP} /> </span>
          </div>
          <div className={style.create}>
            <img src={pic} alt="" />
            <span>منتشر کننده : آرمان</span>
          </div>
        </div>
        <span className={style.time}>03:40</span>
      </div>
      <div className={style.itemTrailer}>
        <img className={style.img} src={pic} alt="" />
        <div className={style.content}>
          <p>تریلر نسخه جدید Call Of Duty Mobile</p>
          <div className={style.show}>
            <span>۲۱ بازدید <img src={circleO} /> </span>
            <span>دو روز پیش <img src={circleP} /> </span>
          </div>
          <div className={style.create}>
            <img src={pic} alt="" />
            <span>منتشر کننده : آرمان</span>
          </div>
        </div>
        <span className={style.time}>03:40</span>
      </div>
      <div className={style.itemTrailer}>
        <img className={style.img} src={pic} alt="" />
        <div className={style.content}>
          <p>تریلر نسخه جدید Call Of Duty Mobile</p>
          <div className={style.show}>
            <span>۲۱ بازدید <img src={circleO} /> </span>
            <span>دو روز پیش <img src={circleP} /> </span>
          </div>
          <div className={style.create}>
            <img src={pic} alt="" />
            <span>منتشر کننده : آرمان</span>
          </div>
        </div>
        <span className={style.time}>03:40</span>
      </div>
      <div className={style.itemTrailer}>
        <img className={style.img} src={pic} alt="" />
        <div className={style.content}>
          <p>تریلر نسخه جدید Call Of Duty Mobile</p>
          <div className={style.show}>
            <span>۲۱ بازدید <img src={circleO} /> </span>
            <span>دو روز پیش <img src={circleP} /> </span>
          </div>
          <div className={style.create}>
            <img src={pic} alt="" />
            <span>منتشر کننده : آرمان</span>
          </div>
        </div>
        <span className={style.time}>03:40</span>
      </div>
    </div>
  );
}

export default TrailerItem;
