import Navbar from './Navbar'
import Header from './Header'
import SubHeader from '../Components/SubHeader'
import rocketSvg from '../assets/rocket-launch.svg'
import ActionButton from '../Components/ActionButton'
import FormButton from '../Components/FormButton'

export default function Home() {
    return (
        <div className = 'font-times text-white min-h-screen mx-5'>
        <Navbar navbarList = {["Home","Contact Us"]}/>
        
        <div className='grid grid-cols-1 justify-items-center mt-28 gap-y-8 sm:gap-y-10 md:gap-y-7 z-0'>
            <Header/>
            <div className='max-w-md'>
                <img src={rocketSvg} alt="" className=''/>
            </div>
            <div className='sm:w-3/4 md:w-full'>
                <SubHeader text = {"Our team specializes in creating effective and engaging websites that will resonate with your audience"} />
            </div>    
            <div className=''>
            <FormButton text = "Tell us about your website"/>
            </div>
            <div className=''>        
                <ActionButton text = "Contact Us"/>   
            </div>
            <a href="" className=' motion-safe:animate-float'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
            </a>
        </div>
        
        </div>
    )
}