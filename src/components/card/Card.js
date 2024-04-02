import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = (props) => {

    const [cards, setCards] = useState([
        {
            "image": "https://thealamdev.github.io/kuub/images/service-1.jpg",
            "title": "Landscape",
            'des': "Curabitur blandit tempus porttitor. Duis mollis inceptos mollisest commodo luctus erat.",
        },
        {
            "image": "https://thealamdev.github.io/kuub/images/service-2.jpg",
            "title": "Advertorial",
            'des': "Maecenas faucibus mollis interdum. Morbi risus porta ac consectetur, vestibulum at eros.",
        },
        {
            "image": "https://thealamdev.github.io/kuub/images/service-3.jpg",
            "title": "Conceptual",
            'des': "Donec elit non porta gravida eget metus. Etiam porta sem malesuada magna mollis euismod.",
        },
    ]);


    const cardItems = cards.map((item, index) => (
        <div className="card shadow hover:shadow-lg" key={index}>
            <div className="w-full">
                <img className="w-full" src={item.image} alt={item.title} />
            </div>
            <div className="text-center mt-5 space-y-3">
                <h3 className="font-medium text-xl dark:text-white">{item.title}</h3>
                <p className="font-normal text-sm text-slate-500 dark:text-slate-100">{item.des}</p>
            </div>
        </div>
    ));

    return (
        <div className="container">
            <div className='text-center'>
                <h3 className='text-heading'>
                    {props.heading}
                </h3>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
                {cardItems}
            </div>
        </div>
    );
};

export default Card;
