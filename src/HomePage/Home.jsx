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
        
        <div className='grid grid-cols-3 mt-24 border-2 gap-y-4 border-red-600'>
            <div className='border-2 col-span-1'>
            <Header />
            </div>
            
            <div className='row-span-4 col-span-2 border-2 self-end'>
                <img src={rocketSvg} alt="" className='w-4/5 border-2 border-red-600 '/>
            </div>
            <div className=' border-2 w-4/5 '>
                <div className=''>
                    <SubHeader text = {"Our team specializes in creating effective and engaging websites that will resonate with your audience"} />
                </div>    
          
            </div>
            <div className='border-2 flex gap-6'>        
                    <ActionButton text = "Contact Us"/>
                    <FormButton text = "Tell us about your website"/>
            </div>

           
        </div>
        </div>
    )
}