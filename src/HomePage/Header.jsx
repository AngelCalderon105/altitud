import { useState, useEffect } from "react";

export default function Header() {
    const serviceList = ["UI/UX Design", "SEO Optimization", "Photo Shoots", "Responsive Design", "Same Day Response"];
    
    const [serviceIndex, setServiceIndex] = useState(0);

    useEffect(() => {
        const rotateService = () => {
            setServiceIndex(prevIndex => (prevIndex + 1) % serviceList.length);  //modulus returns 
        };

        const intervalId = setInterval(rotateService, 3000);

        return () => clearInterval(intervalId); 
    }, [serviceList.length]);

    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-5xl">Launch Your Vision and <br /> Amplify  Your Impact with </h1>
            <h1 className='text-4xl md:text-6xl text-primary-purple font-bold italic transition-opacity'>{serviceList[serviceIndex]}</h1>
        </div>
    );
}
