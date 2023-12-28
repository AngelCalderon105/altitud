import { useState } from "react"
export default function Header() {
    const serviceList = ["SEO", "Photo Shoots", "UI/UX Design"] 
    const [service, setService] = useState("UI/UX Design");
    const [serviceIndex, setServiceIndex] = useState(0);

    // const rotateService = () =>(setService(( )=>(

    //     serviceList.map((elem, index) => ( serviceIndex === index ? setService((prevIndex=>( prevIndex === serviceList.length() - 1 ? 0 : prevIndex + 1 ))): null ))) ) )
    
    // setInterval(rotateService, 4000);

    return(
        <div className="text-6xl">
            <h1>Launch Your Vision and Amplify <br /> Your Impact with </h1>
            <h1 className='text-primary-purple font-bold italic'>UI/UX Designs</h1>
        </div>
    )
}