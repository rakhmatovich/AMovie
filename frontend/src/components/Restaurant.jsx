import React, { useState } from 'react'

const menuData = [
    {
        id: 1,
        type: 'MAINS',
        items: [
            { id: 1, price: '$20.00', title: 'Murgh Tikka Masala', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 2, price: '$35.00', title: 'Fish Moile', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 3, price: '$15.00', title: 'Safed Gosht', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 4, price: '$10.00', title: 'Freanch Toast Combo', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 5, price: '$8.35', title: 'Vegie Omelet', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 6, price: '$22.00', title: 'Chorizo & Egg Omelet', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
        ]
    },
    {
        id: 2,
        type: 'DESSERTS',
        items: [
            { id: 1, price: '$11.00', title: 'Banana Split', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts' },
            { id: 2, price: '$72.00', title: 'Sticky Toffee Pudding', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 3, price: '$26.00', title: 'Pecan', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 4, price: '$42.00', title: 'Apple Strudel', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 5, price: '$7.35', title: 'Pancakes', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 6, price: '$22.00', title: 'Ice Cream Sundae', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
        ]
    },
    {
        id: 3,
        type: 'DRINKS',
        items: [
            { id: 1, price: '$32.00', title: 'Spring Water', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 2, price: '$14.00', title: 'Coke, Diet Coke, Coke Zero', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 3, price: '$93.00', title: 'Orange Fanta', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 4, price: '$18.00', title: 'Lemonade, Lemon Squash', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 5, price: '$38.35', title: 'Sparkling Mineral Water', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
            { id: 6, price: '$69.00', title: 'Lemon, Lime & Bitters', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
        ]
    },
]

export default function Restaurant() {
    const [currentMenu, setCurrentMenu] = useState(0)

    const goToSlide = (slideIndex) => {
        setCurrentMenu(slideIndex);
    };

    return (
        <div className="w-full bg-center bg-cover bg-[url('/restaurant.jpg')]">
            <div className="w-full p-10 h-full bg-black/50  flex items-center justify-center flex-col text-center ">
                <p className="text-[50px]  text-white">Our Restaurant Menu</p>
                <h1 className="text-white w-[40%] mx-auto">
                    Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia, there live the blind texts.
                    Separated they live in Bookmarksgrove right at the coast of the Semantics,
                    a large language ocean.
                </h1>
                <div className='flex items-center justify-center gap-10 text-center w-[20px] my-20'>
                    {menuData.map((slide, slideIndex) => (
                        <h1
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-[#ffba5a] text-[22px] font-semibold cursor-pointer ${slideIndex === currentMenu? 'border-b-2 border-[#ffba5a]': 'pb-[2px]'}`}
                        >
                            {slide.type}
                        </h1>
                    ))}
                </div>

                <div className='flex justify-between flex-wrap text-left w-[80%] mx-auto    '>
                    {menuData[currentMenu].items.map(menuItem => (
                        <div className='w-[45%] mt-5' key={menuItem.id}>
                            <p className='text-[#ffba5a] text-[25px] font-semibold'>{menuItem.price}</p>
                            <p className='text-white text-[25px] font-semibold'>{menuItem.title}</p>
                            <p className='text-gray-300  font-semibold'>{menuItem.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

