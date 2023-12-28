import { useState, useEffect } from "react";

export default function Header() {
    const serviceList = ["UI/UX Design", "SEO Optimization", "Photo Shoots", "Responsive Design", "Same Day Response"];
    
    const [serviceIndex, setServiceIndex] = useState(0);

    useEffect(() => {
        const rotateService = () => {
            setServiceIndex(prevIndex => (prevIndex + 1) % serviceList.length);  //modulus returns 
        };

        const intervalId = setInterval(rotateService, 4000);

        return () => clearInterval(intervalId); 
    }, [serviceList.length]);

    return (
        <div className="text-xl md:text-4xl xl:text-6xl border-2 border-red-500">
            <h1>Launch Your Vision and Amplify <br /> Your Impact with </h1>
            <h1 className='text-primary-purple font-bold italic transition-opacity'>{serviceList[serviceIndex]}</h1>
        </div>
    );
}
