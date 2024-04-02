import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
    const [posts, setPosts] = useState([]);
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

    useEffect(() => {
        axios.get('https://pilotbazar.com/api/clients/vehicles/products?page=2')
            .then(response => {
                setPosts(response.data.payload.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    let vehicles = posts.map((item, index) => {
        return (
            <div className='card hover:shadow' key={index}>
                <div className="w-full">
                    <img className="w-full rounded" src={`https://pilotbazar.com/storage/vehicles/${item.image.name}`} alt={item.title} />
                </div>

                <div className="text-start mt-5 space-y-1">
                    <h3 className="font-normal text-sm dark:text-white">{item.translate[0].title}</h3>
                    <p className="font-normal text-sm text-slate-500 dark:text-slate-100">{item.brand.translate[0].title}</p>
                    <p className="font-normal text-sm text-slate-500 dark:text-slate-100">{item.fixed_price} tk</p>
                </div>
            </div>
        )
    })

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
                <h3 className='font-bold text-black dark:text-slate-100 text-lg'>
                    WHAT SERVICES DO I OFFER
                </h3>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
                {cardItems}
            </div>

            <div className='text-center'>
                <h3 className='font-bold text-black dark:text-slate-100 text-lg'>
                    VEHICLES
                </h3>
            </div>

            <div className="grid grid-cols-5 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pt-10">
                {vehicles}
            </div>
        </div>
    );
};

export default Card;
