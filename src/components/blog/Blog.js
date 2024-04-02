import React from "react";
import jourlan_1 from '../../images/journal-1.jpg';
import jourlan_2 from '../../images/journal-2.jpg';
import jourlan_3 from '../../images/journal-3.jpg';

let values = [
    {
        "heading": "Pellentesque Malesuada Vulputate",
        "date": "21.04.2014 / Photography, Journal",
        "image": "https://thealamdev.github.io/kuub/images/journal-1.jpg",
        "des": "Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi risus, porta consectetur vestibulum at eros.",
        "view": 35,
    },
    {
        "heading": "Malesuada Portar Etiam Ligula",
        "date": "21.04.2014 / Photography, Journal",
        "image": "https://thealamdev.github.io/kuub/images/journal-2.jpg",
        "des": "Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi risus, porta consectetur vestibulum at eros.",
        "view": 24,
    },
    {
        "heading": "Purus Justo Consectetur Ipsum",
        "date": "21.04.2014 / Photography, Journal",
        "image": "https://thealamdev.github.io/kuub/images/journal-3.jpg",
        "des": "Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi risus, porta consectetur vestibulum at eros.",
        "view": 63,
    },
    {
        "heading": "Pellentesque Malesuada Vulputate",
        "date": "21.04.2014 / Photography, Journal",
        "image": "https://thealamdev.github.io/kuub/images/port-1.jpg",
        "des": "Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi risus, porta consectetur vestibulum at eros.",
        "view": 27,
    },
    {
        "heading": "Purus Justo Consectetur Ipsum",
        "date": "21.04.2014 / Photography, Journal",
        "image": "https://thealamdev.github.io/kuub/images/journal-3.jpg",
        "des": "Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi risus, porta consectetur vestibulum at eros.",
        "view": 63,
    },

]

let items = values.map((item, index) => {

    return <div className="border border-slate-100 rounded py-3" key={index}>
        <div className="text-center py-5 px-1">
            <p className="font-medium text-xl dark:text-slate-200">{item.heading}</p>
            <p className="font-normal text-sm text-slate-500 dark:text-slate-200">{item.date}</p>
        </div>

        <div>
            <img src={item.image} className="w-full"></img>
        </div>
        <p className="text-justigy py-5 px-3 font-normal text-sm text-slate-500 dark:text-slate-200">{item.des}</p>

        <div className="py-5 px-3 flex justify-between">
            <div className="relative">
                <p className="text-sm before:absolute before:w-full before:h-0.5 before:bg-sky-500 before:bottom-0 dark:text-slate-200">CONTINUE READING</p>
            </div>
            <p className="text-sm font-normal dark:text-slate-200">{item.view}</p>
        </div>
    </div>
})

export default function Blog() {

    return (

        <div className="container">
            <div className="w-2/5 m-auto relative">
                <div className="w-52 m-auto text-center font-bold text-xl mt-10 before:absolute before:w-28 before:h-0.5 before:bg-slate-600 dark:before:bg-slate-100 before:left-1 before:top-4 after:absolute after:w-28 after:h-0.5 after:bg-slate-600 dark:after:bg-slate-100 after:right-1 after:top-4 dark:text-slate-200">FORM THE JOURNAL</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {items}
            </div>

        </div>

    )

}



