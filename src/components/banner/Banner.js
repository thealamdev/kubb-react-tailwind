import React, { useEffect, useState } from "react";
import banner from '../../images/banner.jpg';
import axios from "axios";



export default function Banner() {
    return (
        <div className="py-96 sm:py-36 md:py-52 lg:py-96 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${banner})` }}>
            <div className="text-center">
                <h3 className="font-bold text-3xl text-slate-100">JONATHON KUBB</h3>
                <p className="font-normal text-2xl text-slate-200">PHOTOGRAPHY</p>
                <p className="font-base text-sm text-slate-100">Based In New York Since 2001</p>
            </div>
        </div>
    )
}