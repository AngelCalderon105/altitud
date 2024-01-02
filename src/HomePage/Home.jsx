import Navbar from './Navbar'
import Header from './Header'
import SubHeader from '../Components/SubHeader'
import rocketSvg from '../assets/rocket-launch.svg'
import ActionButton from '../Components/ActionButton'
import FormButton from '../Components/FormButton'

export default function Home() {
    return (
        <div className = ' md:mx-8 my-8'>
        <Navbar navbarList = {["Home","Contact Us"]}/>
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 justify-items-center mt-36 gap-y-8 md:gap-y-5 lg:gap-y-8 gap-x-4 sm:gap-y-10  z-0  max-w-3xl lg:max-w-7xl'>
                <div className='md:col-span-2 lg:col-span-7 md:justify-self-start'>
                <Header/>
                </div>
                <div className='max-w-xl md:col-span-2 md:row-span-2 lg:col-span-5 lg:row-span-4 xl:row-span-5 self-start'>
                    <img src={rocketSvg} alt="" className=''/>
                </div>
                <div className='sm:w-3/4 md:w-full md:col-span-2 lg:col-span-6'>
                    <SubHeader text = {"Our team specializes in creating effective and engaging websites that will resonate with your audience"} />
                </div>    
                <div className=' md:col-span-2  flex flex-col md:flex-row-reverse items-center gap-8 md:gap-4 lg:gap-6 md:justify-self-start '>
                <FormButton text = "Tell us about your website"/>
                <ActionButton text = "Contact Us"/>   
                </div>
                
                <a href="" className=' motion-safe:animate-float md:col-span-4 lg:col-span-12 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                </a>
            </div>
        </div>
        
        </div>
    )
}