import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function FilterRooms() {
    const [dates, setDates] = useState()
    return (
        <div className='relative'>
            <div className='absolute -top-20 w-full flex justify-center'>
                <form className='p-10 bg-white shadow-xl rounded-xl flex gap-10 items-end'>
                    <label>
                    <span className='block mb-2 font-semibold'>Выбрать дату</span>
                        <RangePicker
                            onChange={(values) => {
                                setDates(values.map(item => {
                                    return moment(item).format('YYYY-MM-DD')
                                }))
                            }}
                        />
                    </label>
                    <label htmlFor="Adults">
                        <span className='block mb-2 font-semibold'>Взрослые</span>
                        <select id="adults" className='border rounded-lg py-1 pl-3 pr-4  outline-yellow-300'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                        </select>
                    </label>
                    <label htmlFor="Children">
                        <span className='block mb-2 font-semibold'>Дети</span>
                        <select id="adults" className='border rounded-lg py-1 pl-3 pr-4  outline-yellow-300'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                        </select>
                    </label>
                    <div className='flex '>
                        <button className='border-none rounded-full py-2 px-10 bg-[#ffaa34] hover:bg-[#ffba5a] text-white'>
                            Проверить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FilterRooms;
