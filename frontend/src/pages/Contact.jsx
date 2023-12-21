import React, { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feedback from '../components/Feedback';

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

export default function Contact() {
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <Layout>
            <Header title={'Contact'} heading={"Home & Contact"} />
            <section className='flex justify-center p-20'>
                <form className='flex flex-col w-[40%] p-5 border border-gray-300'>
                    <div className="mr-4 w-full">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-4 p-3 w-full px-10 border rounded-[10px] "
                        />
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                            Phone
                        </label>

                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mt-4 p-3 px-10 w-[100%] border rounded-[10px] "
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-4 p-3 px-10 rounded-[10px] w-[100%] "
                        />
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                            Write Message
                        </label>

                        <input
                            type="text"
                            id=" Message"
                            name=" Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-4 p-14 px-10 w-[80%] border rounded-[10px] "
                        />
                    </div>
                    <button className='  rounded-[10px] py-2 px-4 bg-[#ffaa34] hover:bg-[#ffba5a]'>Send Message</button>
                </form>
                <div className='w-[40%] '></div>
                <div>
                    <div>
                        <h1 className='font-semibold text-[20px] mt-6 '>ADDRESS:</h1>
                        <p className='font-semibold text text-gray-500 text-[25px] mx-auto mt-7'>98 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[20px] text-gray-700 '>Phone:</h1>
                        <p className='font-semibold text text-gray-500 text-[25px] mx-auto mt-6'>88-301-32-13</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[20px] '>EMAIL:</h1>
                        <p className='font-semibold text text-gray-500 text-[25px] mx-auto mt-6'>info@domain.com</p>
                    </div>
                </div>
            </section>
            <Feedback />
        </Layout>
    )
}
