import React, { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feedback from '../components/Feedback';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
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
            <Header title={'Reservation & Form'} heading={"Home & Contact"} />
            <section className='flex justify-center p-20'>
                <form className='flex flex-col w-[40%] p-5 border border-gray-300'>
                    <div className="mr-4 w-full mb-4">

                        <label htmlFor="name" className=" block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-4 p-3 px-10 rounded-[10px] w-[100%] "
                        />
                        <div className="mb-4  ">
                            <label htmlFor="phone" className="block text-sm font-medium  text-gray-600">
                                Phone
                            </label>
                        </div>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mt-4  p-3 px-10 rounded-[10px] w-[100%] "
                        />

                    </div>
                    <div className="mb-5    ">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 ">
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
                    <div >
                        <label >
                            <span className='block mb-2 font-semibold text-gray-600 first-letter  '>Ckeck date</span>
                            <RangePicker
                                onChange={(values) => {
                                    setDates(values.map(item => {
                                        return moment(item).format('YYYY-MM-DD')
                                    }))
                                }}
                            />
                        </label>
                    </div>
                    <div className='flex mt-3'>
                        <div className=''>
                            <label htmlFor="dults ">
                                <span className='block mb-2 font-semibold  text-gray-600 '>Adults</span>
                                <select id="adults" className='border rounded-md py-2 pl-28 pr-29'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4+</option>
                                </select>
                            </label>
                        </div>
                        <div className='ml-10 '>
                            <label htmlFor="Children">
                                <span className='block mb-2 font-semibold  text-gray-600 '>Children</span>
                                <select id="adults" className='border rounded-md py-2 pl-28 pr-29  '>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4+</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="mb-4 mt-4 ">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                            Write Message
                        </label>

                        <textarea
                            rows="3"
                            type="text"
                            id="Message"
                            name=" Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-4 p-3 w-full border text-[16px] rounded-[10px]"
                        ></textarea>
                    </div>
                    <button className='  rounded-[10px] py-2 px-4 bg-[#ffaa34] hover:bg-[#ffba5a]'>Reserver Now</button>

                </form>
                <div className='w-[30%]'></div>
                <div className=''>
                    <div>
                        <h1 className='font-semibold text-[20px] mt-6 text-left '>ADDRESS:</h1>
                        <p className='font-semibold text text-gray-500 text-[25px] mx-auto mt-7'>98 West 21th Street, <br />
                            Suite 721 New York NY 10016</p>
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
