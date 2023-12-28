import Navbar from './Navbar'
import Header from './Header'
import SubHeader from '../Components/SubHeader'
import rocketSvg from '../assets/rocket-launch.svg'
import ActionButton from '../Components/ActionButton'
import FormButton from '../Components/FormButton'

export default function Home() {
    return (
        <div className = 'min-h-screen mx-5'>
        <Navbar navbarList = {["Home","Contact Us"]}/>
        
        <div className='grid grid-rows-2 grid-cols-2 mt-24'>
            <Header />
            <div className='row-span-2  '>
                <img src={rocketSvg} alt="" className='w-full '/>
            </div>
            <div className='w-4/5'>
                <div className=' my-5'>
                    <SubHeader text = {"Our team specializes in creating effective and engaging websites that will resonate with your audience"} />
                </div>    
                <div className='flex justify-start gap-7'>        
                    <ActionButton text = "Contact Us"/>
                    <FormButton text = "Tell us about your website"/>
                </div>
            </div>

           
        </div>
        </div>
    )
}