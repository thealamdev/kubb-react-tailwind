import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Vehicles(props) {

    const [vehicles, setVehicles] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pilotbazar.com/api/clients/vehicles/products?page=${count}`);
                setVehicles(prevVehicles => [...prevVehicles, ...response.data.payload.data]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, [count]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
                setCount(prevCount => prevCount + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const vehicleItem = vehicles.map((item, index) => {
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
    });

    return (
        <div className='container'>

            <div className='text-center'>
                <h3 className='text-heading'>
                    {props.heading}
                </h3>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                {vehicleItem}
            </div>
        </div>

    )
}
