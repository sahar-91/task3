import React from "react";
import{
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function According({array}) {
   const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        array.map((item) => (
            <div className="container mx-auto px-4 py-8 ">

            <Accordion  key={item.id} className="bg-white shadow-md px-4 rounded-2xl" open={open === item.id} icon={<svg className={`w-5 h-5 transition-transform duration-300 ${open === item.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}>
                <AccordionHeader className={`text-[palevioletred] font-semibold cursor-pointer ${open === item.id ? "text-pink-600" : ""}`} onClick={() => handleOpen(item.id)}> {item.title} </AccordionHeader>
                <AccordionBody> {item.description} </AccordionBody>
            </Accordion>
            </div>
        ))
    );
}