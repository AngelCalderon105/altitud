import { useState, useEffect } from "react";

export default function Header() {
    const serviceList = ["UI/UX Design", "SEO Optimization", "Photo Shoots", "Responsive Design"];
    
    const [serviceIndex, setServiceIndex] = useState(0);

    useEffect(() => {
        const rotateService = () => {
            setServiceIndex(prevIndex => (prevIndex + 1) % serviceList.length);  //modulus returns 
        };

        const intervalId = setInterval(rotateService, 3000);

        return () => clearInterval(intervalId); 
    }, [serviceList.length]);

    return (
        <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight md:text-nowrap">Launch Your Vision and Amplify <br /> Your Impact with </h1>
            <h1 className='text-4xl md:text-5xl lg:text-6xl mt-1.5 text-primary-purple font-bold italic transition-opacity text-nowrap '>{serviceList[serviceIndex]}</h1>
        </div>
    );
}
