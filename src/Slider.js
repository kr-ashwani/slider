import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import slide_1 from "./assets/diaochan_wallpaper.jpg";
import slide_2 from "./assets/fantansyGirl_wallpaper.jpg";
import slide_3 from "./assets/fictionWoman_wallpaper.jpg";
import slide_4 from "./assets/futuristicCity_wallpaper.jpg";
import slide_5 from "./assets/girlWing_wallpaper.jpg";
import slide_6 from "./assets/illustration_wallpaper.jpg";
import slide_7 from "./assets/luciferOnFire_wallpaper.jpg";
import slide_8 from "./assets/neonSword_wallpaper.jpg";
import slide_9 from "./assets/painting_wallpaper.jpg";
import slide_10 from "./assets/wolfhauling_wallpaper.jpg";
import "./Slider.css";

register();

export const Slider = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
    >
      <swiper-slide>
        <div className="slideFrame">
          <img src={slide_1} alt="slide" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="slideFrame">
          <img src={slide_2} alt="slide" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="slideFrame">
          <img src={slide_3} alt="slide" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="slideFrame">
          <img src={slide_4} alt="slide" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="slideFrame">
          <img src={slide_5} alt="slide" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="slideFrame">
          <img src={slide_6} alt="slide" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="slideFrame">
          <img src={slide_7} alt="slide" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="slideFrame">
          <img src={slide_8} alt="slide" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="slideFrame">
          <img src={slide_9} alt="slide" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="slideFrame">
          <img src={slide_10} alt="slide" />
        </div>
      </swiper-slide>
    </swiper-container>
  );
};
