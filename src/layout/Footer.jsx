import style from "./Footer.module.css";
import pic1 from "./../assets/1.png";
import pic2 from "./../assets/2.png";
import pic3 from "./../assets/3.png";
import movie1 from "./../assets/m1.png";
import movie2 from "./../assets/m2.png";
import movie3 from "./../assets/m3.png";
import post from "../assets/post.svg";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className={style.top}>
        <div className={style.right}>
          <div className={style.hot}>
            <h3>داغترین مطالب هفته</h3>
            <div className={style.boxMovies}>
              <div>
                <img src={movie1} />
                <p>این هفته چه بازی های معرفی می شوند.</p>
              </div>
              <div>
                <img src={movie2} />
                <p>جدیدترین تریلر بازی های جدید</p>
              </div>
              <div>
                <img src={movie3} />
                <p>این هفته چه بازی های معرفی می شوند.</p>
              </div>
            </div>
          </div>
          <div className={style.pup}>
            <h3>پربازدیدترین صفحات</h3>
            <ul>
              <Link to="/">
                <li>جدیدترین بازی ها</li>
              </Link>
              <Link to="/">
                <li>فروشگاه</li>
              </Link>
              <Link to="/">
                <li>درباره ما</li>
              </Link>
              <Link to="/">
                <li>تماس با ما</li>
              </Link>
              <Link to="/">
                <li>تماس با ما</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className={style.left}>
          <h3>عضویت در خبرنامه</h3>
          <div className={style.search}>
            <input type="text" placeholder="ایمیل خود را وارد کنید" />
            <button>
              <FaArrowLeft size={30} color="var(--text-color)" />
            </button>
            <img src={post} alt="" />
          </div>
          <div className={style.other}>
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.div}>
          <p>
            {" © "}
            کپی بخش یا کل هر کدام از مطالب تنها با کسب مجوز مکتوب امکان پذیر
            است.
          </p>
          <div className={style.none}>
            <IoLogoInstagram size={25} color="var(--text-color)" />
            <IoLogoWhatsapp size={25} color="var(--text-color)" />
            <IoLogoLinkedin size={25} color="var(--text-color)" />
            <IoLogoTwitter size={25} color="var(--text-color)" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
