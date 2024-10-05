import React from "react";
import SliderComponent from "../components/Slider";
import NewContent from "../components/NewContent";
import LatestReviews from "../components/LatestReviews";
import TitleContent from "../components/module/TitleContent";
import Articles from "../components/Articles";
import Trailers from "../components/Trailers";

function HomePage() {
  const title = ["جدیدترین مقالات", "جدیدترین نقد و بررسی ها", "تریلر بازی ها"];
  return (
    <div>
      <br />
      <br />
      <SliderComponent />

      <NewContent />
      <TitleContent title={title[0]} />
      <Articles />

      <TitleContent title={title[1]} />
      <LatestReviews />

      <TitleContent title={title[2]} />
      <Trailers />
     
    </div>
  );
}

export default HomePage;
