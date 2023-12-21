import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Nodirbek",
    // country:
    img: "/user.png",
    review:
      "«Хороший отель. Даже очень. Все удобства, комфорт и обслуживание персонала на высоте.»",
  },
  {
    name: "Denis",
    // country:
    img: "user.png",
    review:
      "«Хорошее здание. Высокие потолки, хорошие габариты. Нормальный душ, балкон, пространство.»",
  },
  {
    name: "Феликс",
    // country:
    img: "/user.png",
    review:
      "«Все понравилось. Вежливый персонал. Номера чистые. Уютные. Новые»",
  },
  {
    name: "Djurabek",
    // country:
    img: "/user.png",
    review:
      "«Вежливый персонал. Чистые комнаты. Цена и качество - идеальное. Рядом много ресторанов и пабов в пешей доступности.»",
  },
  {
    name: "Nadira",
    // country:
    img: "/user.png",
    review:
      "«Для отдыха с семьей - самое то. цена = качество. спасибо огромное девушке , которая нас встретила и разместила раньше времени, даже если заезд был в 13:00.»",
  },
  {
    name: "Мурад",
    // country:
    img: "/user.png",
    review:
      "«Отель красивый , сотрудники ребята просто молодцы помогли все время . Блогадарю руководству отеля и сотрудника за теплый приём. Желаю процветания.»",
  },
];

function Arrows(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

export default function Feedback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrows />,
    prevArrow: <Arrows />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-20">
      <h1 className="flex justify-center font-PlayFairDisplay text-4xl">
        Отзывы
      </h1>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="m-auto relative group ">
                <div className="w-9 flex justify-center items-center ml-[540px]">
                  <img src={d.img} alt="" />
                </div>
                <div className="text-center flex flex-col justify-center items-center gap-4 p-4 text-gray-500">
                  <p className="mt-5">{d.review}</p>
                  <p>{d.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
