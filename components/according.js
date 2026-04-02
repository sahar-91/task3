'use client';
import {useState} from 'react';

export default function According({array}) {
    const [openId, setOpenId] = useState(null);
    
    return ( 
        <>
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-[palevioletred] ">Expert Advice</h2>
            {array.map((item) => {
                const isExpanded = openId === item.id;
                return(
                <div key={item.id}
                 className={"bg-white max-w-[800px] rounded-lg shadow-md p-4 mb-4 overflow-hidden transition-all duration-300" + (isExpanded ? " max-h-96" : " max-h-20")}>
                    <div className="flex justify-between p-6 cursor-pointer">
                        <h3 className="text-lg font-semibold text-[palevioletred]">{item.title}</h3>    
                        <div className={"transform transition-transform duration-300 " + (isExpanded ? "rotate-90" : "")} onClick={() => setOpenId(openId === item.id ? null : item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
           <div className="px-5 overflow-hidden transition-all duration-300">{isExpanded && <p className="text-gray-600 mt-2">{item.description}</p>}</div>
        </div>
   );
        })}
        </div>
    </>
)}